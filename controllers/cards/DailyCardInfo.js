// 필요 정보 : cardInfo, user's photo, selections' memo, selections, card's tagged friends, date
// request : dailyCardId
// flow
// 1. 해당 dailyCard를 들어가면 그 card의 ID를 받음(request)
// 2. 들어간 card에는 dailyCard table에서 받는 photo와 date 정보를 얻고
// 3. selection table의 type을 얻음
// 4. /searchfriends 를 통해 해당 card에 누가 속해있는지 알 수 있음

const { dailyCard, selection } = require("../../models");
const axios = require("axios");

module.exports = async (req, res) => {

  const { dailyCardId } = req.body;
  // console.log('d', req.body);

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
              // console.log('친구목록',friends.data.friendsInfo);
              res.status(200).send({
                message: `${dailyCardId}번 카드의 정보를 조회했습니다.`,
                date: card.date,
                photo: card.photo,
                memo: selection.memo,
                selections: selection.type,
                friends: friends.data.friendsInfo,
              });
            });
        });
    })
    .catch((err) => {
      res.status(400).send({ message: "카드를 조회할 수 없습니다." });
    });
};
