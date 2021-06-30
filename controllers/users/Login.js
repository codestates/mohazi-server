const { user } = require('../../models')

module.exports = {
  post: async (req, res) => {
    await user.findOne({
      where: { email: req.body.email }
    }).then(userInfo => {
      if (!userInfo) {
        res.status(400).send("아이디 또는 비밀번호를 잘못입력했습니다.")
      }
      else {
        req.session.save(function () {
          req.session.userId = userInfo.dataValues.id
          console.log(req.session)
          res.status(200).json({
            id: userInfo.dataValues.id,
            email: userInfo.dataValues.email,
            username: userInfo.dataValues.username,
            photo: userInfo.dataValues.photo,
            description: userInfo.dataValues.description,
          })
        })
      }
    })
  }
}