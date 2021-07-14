const { user, user_daily, dailyCard } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { userId } = req.query;
  await user
    .findOne({
      where: {
        id: userId,
      },
    })
    .then((admin) => {
      user_daily
        .findAll({
          raw: true,
          where: {
            user_id: admin.id,
          },
        })
        .then((cards) => {
          // console.log(cards);
          return cards.map((el) => el.dailyCards_id);
        })
        .then((cardIDs) => {
          // console.log(cardIDs);
          dailyCard
            .findAll({
              raw: true,
              where: {
                id: {
                  [Op.in]: cardIDs,
                },
                admin: {
                  [Op.not]: userId,
                },
              },
            })
            .then((result) => {
              // console.log(result);
              if (result.length === 0) {
                return res.status(400).send({
                  message: `${userId}번 유저가 태그된 카드가 없습니다.`,
                });
              }
              res.status(200).send({
                message: `${userId}번 유저가 태그된 카드 목록을 조회했습니다.`,
                taggedCards: result,
              });
            });
        });
    })
    .catch((err) => {
      res.status(400).send({
        message: `해당 유저가 존재하지 않습니다.`,
      });
    });
};

// /signup
// 1. 유저네임 한글도 가능하도록 구체화