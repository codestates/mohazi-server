const { user } = require('../../models')

module.exports = {
  post: async (req, res) => {
    // console.log(req)
    await user.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(userInfo => {
      if (!userInfo) {
        await user.create({
          email: req.body.email,
          password: req.body.googleid,
          username: req.body.username,
        });
        await req.session.save(function () {
          req.session.userId = userInfo.dataValues.id
          req.status(200).send({ message: "소셜 로그인에 성공했습니다." })
        })
      }
      else {
        await req.session.save(function () {
          req.session.userId = userInfo.dataValues.id
          res.status(200).send({
            userinfo: {
              id: userInfo.dataValues.id,
              email: userInfo.dataValues.email,
              username: userInfo.dataValues.username,
              photo: userInfo.dataValues.photo,
              description: userInfo.dataValues.description,
            }
          })
        })
      }
    })
  }
}