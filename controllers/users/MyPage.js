const { user, user_daily, dailyCard, selection } = require("../../models");
const { Op } = require("sequelize");

/**
 * /mypage로 들어갔을 때 정말로 필요한 것들?
 * 카드들의 id, 내 정보
 * /detailcardinfo 이런 곳으로 들어간다면
 * 들어가서(해당 dailyCardId를 통해) 해당 selections, friends 불러오기 가능
 * 즉 /mypage와 /detailcardinfo로 분기하는 게 나을 것 같음
 */

module.exports = async (req, res) => {
  const { userId } = req.body;

  // await user.findOne({
  //   where: {
  //     id: userId,
  //   }
  // })
  // .then(admin => {
  //   user_daily.findAll({
  //     raw: true,
  //     where: {
  //       user_id: userId,
  //     }
  //   })
  //   // .then(result => {
  //   //   res.status(200).send(result)
  //   // })
  //   .then(tables => {
  //     console.log(tables)
  //     for (const el in tables) {
  //     dailyCard.findOne({
  //       where: {
  //         id: tables[el].dailyCards_id
  //       }
  //     })
  //   }
  //   // then(cards => {
  //   //   console.log(cards)
  //   // })
  //   })
  // })

  // flow)
  // user 탐색 - 해당 user가 속한 cards 탐색 - 해당 cards에 속한 다른 user 탐색 - 해당 users return
  // try {
  //   const admin = await user.findOne({
  //     where: {
  //       id: userId,
  //     },
  //   });

  //   const tables = await user_daily.findAll({
  //     raw: true,
  //     where: {
  //       user_id: admin.id,
  //     },
  //   });

  //   console.log(tables);

  //   const cards = tables.map(el => {
  //     return el.dailyCards_id
  //   })

  //   console.log(cards)
  //   const selections = cards.map(el => {
  //     return selection.findOne({
  //       where: {
  //         dailyCards_id: el
  //       }
  //     })
  //   })
  //   console.log(selections)
  // const selections = [];

  // for (let el of tables) {
  //   const results = await selection.findOne({
  //     raw: true,
  //     where: {
  //       dailyCards_id: el.dailyCards_id,
  //     },
  //   });
  //   selections.push(results);
  // }

  // console.log(selections)

  // const selected = [];
  // const cardId;
  // const type;
  // for (let el of selections) {
  //   if (el === null) {
  //     continue;
  //   }
  //   if (el.dailyCards_id === )
  //   selected.push(el.type)
  // }

  // console.log(selected)

  //     res.status(200).send({ DailyCards: [{}] });
  //   } catch (err) {
  //     // }
  //     res.status(400).send(console.log(err));
  //   }
  // };

  // 1. friends show 엔드포인트 따로 분기
  // 2. 나머지 selection까지를 /mypage 로 response
  // 3. 그마저 힘들면 selection show 엔드포인트 따로 분기
  try {
    const admin = await user.findOne({
      where: {
        id: userId,
      },
    });

    const cards = await user_daily.findAll({
      raw: true,
      where: {
        user_id: admin.id,
      },
    });
    // console.log(cards)
    const cardIDs = cards.map((card) => {
      // 해당 유저가 속한 데일리카드ID 뽑기
      // user_daily.findAll({
      //   raw: true,
      //   where: {
      //     dailyCards_id: card.dailyCards_id
      //   }
      // })
      // .then(users => {
      //   // console.log("user 9's CardID: ", users[0].dailyCards_id)
      //   return users.map(el => el.dailyCards_id)
      // })
      // .then(result => {
      //   console.log(result)
      //   // cardID.push(result[0])
      //   return result[0]
      // })
      return card.dailyCards_id;
    });
    console.log(cardIDs); // 데일리카드ID들(array)

    ///////////// 현재 데일리카드ID 들은 뽑음 ///////////////

    const friends = await user_daily.findAll({
      // 나와 같은 카드를 공유하고 있는 친구들
      raw: true,
      where: {
        dailyCards_id: {
          [Op.or]: cardIDs,
        },
        user_id: {
          [Op.not]: userId,
        },
      },
    });
    console.log(friends);

    // const userIDs = friends.map(el => el.user_id)
    // console.log(userIDs)

    ///////////// 9번 유저가 갖고 있는 모든 카드들 중 한 카드에라도 태그돼 있는 친구들 /////////

  } catch (err) {
    console.log(err);
  }
};
