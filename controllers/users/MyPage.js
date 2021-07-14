// /mypage에 들어갔을 때 필요한 정보들
// user정보, 해당 user가 갖고 있는 카드들, 해당 user가 tag된 카드들
// user table, user_daily table

// TODO : /mypage에서 selections도 보이도록
const { user, dailyCard, selection } = require("../../models");
const axios = require("axios");

module.exports = async (req, res) => {
  const { userId } = req.body;

  //console.log('여기', userId)
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
          axios
            .get(`https://api.mohazi.site/searchtaggedcards`, {
              params: {
                userId: userId,
              },
            })
            .then((tagged) => {
              res.status(200).send({
                message: `${userId}번 유저의 정보를 조회했습니다.`,
                userInfo: admin,
                myCards: cards,
                taggedCards: tagged.data.taggedCards,
              });
            });
        });
    })
    .catch((err) => {
      res.status(400).send({ message: "유저 정보를 조회할 수 없습니다." });
    });
};
