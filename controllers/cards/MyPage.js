// req.body === userId
// 해당 유저가 등록한, 혹은 tag 돼있는 cards 나열
// 해당 card 안에는 selections 들어가 있다.
// 1) friends : 해당 dailyCard의 id를 공유하고 있다?
// => 친구 추가할 endpoint가 필요할 것 같다. /addfriends
// 2) 현재 client 단에서는 /usersearch 로 친구 검색을 함
// but 이걸 추가하는건?
// 단순하게 /usersearch 로 검색된 user들만 다시 되돌려주는게 friends?
const { user, user_daily, selection, dailyCard } = require("../../models");
const { Op } = require("sequelize");

// module.exports = async (req, res) => {
//   // console.log(req.body)
//   if (req.body.userId) {
//     await user // 처음에 현재 유저 잡고
//       .findOne({
//         where: {
//           id: req.body.userId,
//         },
//       })
//       .then((User) => {
//         // console.log(User)
//         user_daily // 그 유저가 속해있는 dailyCard들 탐색
//           .findAll({
//             where: {
//               user_id: User.dataValues.id,
//             },
//           })
//           .then((userdaily) => {
//             // console.log(userdaily);
//             // for (let i = 0; i < userdaily.length; i++) {
//             dailyCard // 해당 dailyCard 정보
//               .findAll({
//                 where: {
//                   id: userdaily.dataValues.dailyCards_id,
//                 },
//               })
//               // }
//               // })
//               .then((dailycard) => {
//                 console.log(dailycard);
//                 selection // 해당 dailyCard에 어떤 장소들이 select 돼있는지 탐색
//                   .findOne({
//                     where: {
//                       dailyCards_id: dailycard.dataValues.id,
//                     },
//                   })
//                   .then((selection) => {
//                     console.log(selection);
//                     user_daily // 다시 타고 돌아감
//                       .findAll({
//                         where: {
//                           dailyCards_id: dailycard.dataValues.id,
//                         },
//                       })
//                       .then((tables) => {
//                         console.log(tables);
//                         user // 같은 dailyCardId를 가진 users 검색 => friends
//                           .findAll({
//                             where: {
//                               id: tables.dataValues.user_id,
//                             },
//                           })
//                           .then((friends) => {
//                             res.status(200).send({
//                               DailyCards: [
//                                 {
//                                   id: dailycard.id,
//                                   date: dailycard.date,
//                                   userId: User.id,
//                                   photo: [dailycard.photo],
//                                   selections: selection.type,
//                                   friends: [friends],
//                                 },
//                               ],
//                             });
//                           });
//                       });
//                   });
//               });
//           });
//       })
//       .catch((err) => console.log(err));
//   }
//   res.status(400).send({ err: "err" });
// };

// module.exports = async (req, res) => {
//   if (req.body.userId) {
//     await user.findOne({
//       where: {
//         id: req.body.userId
//       }
//     })
//     .then(User => {
//       // console.log(User)
//       user_daily.findAll({
//         raw: true,
//         where: {
//           user_id: User.id
//         }
//       })
//       .then(userdailies => {
//         // console.log(userdailies)
//         for (let el of userdailies) {
//           // console.log(el)
//         dailyCard.findOne({
//           raw: true,
//           where: {
//             id: el.dailyCards_id
//           }
//         })
//         .then(cards => {
//           console.log(cards)
//           // for (let el of cards) {
//           selection.findOne({
//             raw: true,
//             where: {
//               dailyCards_id: cards.id
//             }
//           })
//           .then(selections => {
//             console.log(selections)
//             user_daily.findAll({
//               where: {
//                 dailyCards_id: selections.dailyCards_id
//               }
//             })
//             .then(asdf => {
//               // console.log(asdf)
//             })
//           })
//         })
//       }
      
//     })
//   })
//   .then(result => {
//     res.status(200).send("성공")
//   })
//   }
// }

// 같은 card에 속해 있는 친구 탐색 flow
// 1. 접속해 있는 user 탐색
// 2. 해당 user가 속해 있는 card 탐색
// 3. 속해 있는 card에 또 다른 user가 있는지 탐색
// 4. 해당 userinfo return

// 막힌 부분 : .findAll을 사용하면 배열 안의 객체 형태로 return됨
// 즉 배열의 모든 요소를 돌아야 하는데, for 반복문을 사용하면 최초 요소만 send됨
// continue?
const guys = []
module.exports = {
  friends: async (req, res) => {
    await user.findOne({
      where: {
        id: req.body.userId
      }
    })
    .then(User => {
      user_daily.findAll({
        raw: true,
        where: {
          user_id: User.id
        }
      })
      .then(cards => {
        // console.log(cards)
        // cards.map(el => el.dailyCards_id)
        for (let el in cards) {
          // console.log(el)
        user_daily.findAll({
          raw: true,
          where: {
            dailyCards_id: cards[1].dailyCards_id,
            // dailyCards_id: el.dailyCards_id,
            user_id: {
              [Op.not]: User.id
            }
          }
        })
        .then(tagged => {
          // console.log(tagged)
          user.findAll({
            raw: true,
            where: {
              // id: {
              //   [Op.not]: tagged[0].user_id === User.id
              // }
              id: tagged[0].user_id
            }
          })
          .then(friends => {
            console.log(friends)
            // res.status(200).send({cardId: cards[1].dailyCards_id, friends: friends})
            // const guys = [];
            guys.push(friends[0])
          })
        })
        }
        console.log(guys)
      })
    })
    // .then(result => {
    //   res.status(200).send("성공")
    // })
  }
}
