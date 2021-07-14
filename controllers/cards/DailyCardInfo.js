// 필요 정보 : cardInfo, user's photo, selections, card's tagged friends, date
// request : dailyCardId
// flow
// 1. 해당 dailyCard를 들어가면 그 card의 ID를 받음(request)
// 2. 들어간 card에는 dailyCard table에서 받는 photo와 date 정보를 얻고
// 3. selection table의 type을 얻음
// 4. /searchfriends 를 통해 해당 card에 누가 속해있는지 알 수 있음

// 현재 error: 이미 한 엔드포인트를 사용중인데, 거기서 또 다른 엔드포인트로 접근이 안 되는 듯 하다.
// local에서 테스트해서 문제인지 오히려 배포 상태에선 될 수도 있을 것 같긴 하다.

const { dailyCard, selection } = require("../../models");
const axios = require("axios");
// const https = require("https");
// const agent = new https.Agent({  
//   rejectUnauthorized: false
// });

module.exports = async (req, res) => {
  const { dailyCardId } = req.body;
  // try {
  //   const friends = await axios
  //   .get(`https://localhost:4000/searchfriends?dailyCardId=${dailyCardId}`, {
  //     // params: {
  //     //   dailyCardId: dailyCardId,
  //     // },
  //     // proxy: {
  //     //   // host: '127.0.0.1',
  //     //   port: 80,
  //     // }
  //   })

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
              
              
                // proxy: {
                //   // host: '127.0.0.1',
                //   port: 80,
                // }
              })
              .then((friends) => {
                // console.log(friends);
                res.status(200).send({
                  photo: card.photo,
                  date: card.date,
                  selections: selection.type,
                  friends: friends,
                });
              });
          });
      })
      .catch(err => {
        res.status(400).send(err)
      })
  // }
  // catch(err) {
  //   res.status(400).send({ message: "카드 정보를 조회할 수 없습니다.", err: err });
  // }
}
