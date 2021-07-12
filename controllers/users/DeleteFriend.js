const { user_daily } = require('../../models')

module.exports = {
  delete: async (req, res) => {
    const { userId, dailyCardId } = req.body
    
    await user_daily.destroy({
      where: {
        user_id: userId,
        dailyCards_id: dailyCardId
      }
    })
    .then(response => {
      res.status(200).send({
        message: "성공적으로 친구가 삭제되었습니다."
      })
    })
      .catch(err => {
        res.status(400).send({
          error: "error"
        })
      })
  }
}
