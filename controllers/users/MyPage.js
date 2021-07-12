const {user, user_daily, dailyCard, selection} = require('../../models');

module.exports = async (req, res) => {
  const {userId} = req.body;

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
  try {
    const admin = await user.findOne({
      where: {
        id: userId,
      }
    })

    const tables = await user_daily.findAll({
      raw: true,
      where: {
        user_id: admin.id,
      }
    })

    for (let el in tables) {
    const cards = await user_daily.findAll({
      raw: true,
      where: {
        dailyCards_id: tables[el].dailyCards_id,
      }
    })
    continue;
  }
  console.log(cards)

  const friends = await user.findAll({
    where: {
      id: cards[el].user_id
    }
  })

    res.status(200).send(friends)
// }
  }
  catch(err) {
    res.status(400).send(console.log(err))
  }
}