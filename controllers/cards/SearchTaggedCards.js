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
                  [Op.or]: cardIDs,
                },
                admin: {
                  [Op.not]: userId,
                },
              },
            })
            .then((result) => {
              // console.log(result);
              res.status(200).send({
                message: `${userId}번 유저가 태그된 카드 목록을 조회했습니다.`,
                taggedCards: result,
              });
            });
        });
    })
    .catch((err) => {
      res.status(400).send({
        message: `현재 유저가 태그된 카드를 조회할 수 없습니다.`,
      });
    });
};
