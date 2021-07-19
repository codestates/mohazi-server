const { dailyCard, selection } = require("../../models");
const axios = require("axios");

module.exports = async (req, res) => {
  const { dailyCardId } = req.body;

  await dailyCard
    .findOne({
      where: {
        id: dailyCardId,
      },
    })
    .then((card) => {
      selection
        .findOne({
          where: {
            dailyCards_id: card.id,
          },
        })
        .then((selection) => {
          axios
            .get(`https://api.mohazi.site/searchfriends`, {
              params: {
                dailyCardId: dailyCardId,
              },
            })
            .then((friends) => {
              res.status(200).send({
                message: `${dailyCardId}번 카드의 정보를 조회했습니다.`,
                data: {
                  dailyCards_id: dailyCardId,
                  date: selection.date,
                  photo: selection.photo,
                  memo: selection.memo,
                  admin: selection.admin,
                  type: selection.type,
                  friends: friends.data.friendsInfo,
                },
              });
            });
        });
    })
    .catch((err) => {
      res.status(400).send({ message: "카드를 조회할 수 없습니다." });
    });
};
