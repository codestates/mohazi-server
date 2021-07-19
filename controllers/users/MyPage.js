const { user, dailyCard, selection } = require("../../models");
const axios = require("axios");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { userId } = req.body;

  await user
    .findOne({
      where: {
        id: userId,
      },
    })
    .then((admin) => {
      dailyCard
        .findAll({
          raw: true,
          where: {
            admin: admin.id,
          },
        })
        .then((cards) => {
          return cards.map((el) => el.id);
        })
        .then((myCardsID) => {
          axios
            .get(`https://api.mohazi.site/searchtaggedcards`, {
              params: {
                userId: userId,
              },
            })
            .then((tagged) => {
              return tagged.data.taggedCards.map((el) => el.id);
            })
            .then((taggedCardsID) => {
              selection
                .findAll({
                  raw: true,
                  where: {
                    dailyCards_id: {
                      [Op.in]: myCardsID,
                    },
                  },
                })
                .then((mySelections) => {
                  selection
                    .findAll({
                      raw: true,
                      where: {
                        dailyCards_id: {
                          [Op.in]: taggedCardsID,
                        },
                      },
                    })
                    .then((taggedSelections) => {
                      res.status(200).send({
                        message: `${admin.username} 유저의 정보를 조회했습니다.`,
                        userInfo: {
                          id: admin.id,
                          email: admin.email,
                          username: admin.username,
                          photo: admin.photo,
                          description: admin.description,
                        },
                        myCardsInfo: mySelections,
                        taggedCardsInfo: taggedSelections,
                      });
                    });
                });
            });
        });
    })
    .catch((err) => {
      res.status(400).send({ message: "유저 정보를 조회할 수 없습니다." });
    });
};
