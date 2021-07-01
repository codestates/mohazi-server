const { user, user_daily } = require('../../models')

module.exports = {
  delete: async (req, res) => {
    const { userId } = req.body
    await user_daily.destroy({
      where: {
        user_id: userId
      }
    }).then(result => {
      user.destroy({
        where: {
          id: userId
        }
      })
    }).then(response => {
      res.status(200).send("성공적으로 회원탈퇴 되었습니다.")
    })
      .catch(err => {
        res.status(401).send("세션이 만료되었습니다.")
      })
  }
}
