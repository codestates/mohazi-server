const { user, user_daily } = require('../../models')

module.exports = {
  post: async (req, res) => {
    const { email, password, username } = req.body

    if (!email || !password || !username) {
      return res.status(422).send("모든항목을 적어주세요")
    }

    await user.findOne({
      where: {
        email: email
      }
    }).then(userInfo => {
      if (userInfo) {
        res.status(409).send("중복된 이메일이 존재합니다.")
      } else {
        user.create({
          username: username,
          email: email,
          password: password
        }).then(userInfo => {
          user_daily.create({
            user_id: userInfo.dataValues.id,
          })
          res.status(200).send("회원가입이 완료되었습니다.")
        })
      }
    })
  }
}
