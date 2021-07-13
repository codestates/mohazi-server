const { user_daily } = require('../../models')

module.exports = {
  put: async (req, res) => {
    const { userId, dailyCardId } = req.body
    //console.log('친구 아이디', parseInt(userId), dailyCardId)
    const friend = user_daily.findOne({
        where: {
            user_id: userId,
            dailyCards_id: dailyCardId
        }
    })

    if(!friend) {
        await user_daily.create({
            user_id: userId,
            dailyCards_id: dailyCardId
          })
          .then(response => {
            console.log('친구추가 성공', response)
            res.status(200).send({
              message: "성공적으로 친구가 추가되었습니다"
            })
          })
          .catch(err => {
            res.status(400).send({
              message: "error"
            })
        })
    } else {
        res.status(400).send({ message: "이미 추가된 친구입니다"})
    }
  }
}
