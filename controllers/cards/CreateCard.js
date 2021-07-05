const { dailyCard, user_daily, selection } = require('../../models')

module.exports = {
  post: async (req, res) => {
    await dailyCard.create({
      user_id: req.body.userId,
      photo: "",
      date: req.body.date
    })
      .then(cardInfo => {
        selection.create({
          dailyCards_id: cardInfo.dataValues.id,
          memo: "",
          type: req.body.selections,
          photo: cardInfo.dataValues.photo,
          date: cardInfo.dataValues.date,
        })
      })
      .then(selections => {
        user_daily.create({
          user_id: req.body.userId,
          dailyCars_id: selections.dailyCars_id,
        })
        res.status(200).send({
          dailyCard: cardInfo,
          selections: selections,
          message: "성공적으로 일정을 등록했습니다."
        })
      })
  }
}