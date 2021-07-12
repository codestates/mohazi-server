const { user } = require('../../models')

module.exports = {
  post: async (req, res) => {
    await user.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(userInfo => {
      if (!userInfo) {
        user.create({
          email: req.body.email,
          password: req.body.googleId,
          username: req.body.name,
        })
          .then(socialInfo => {
            req.session.save(function () {
              req.session.userId = socialInfo.dataValues.id
            })
            user.findOne({
              where: {
                id: socialInfo.dataValues.id
              }
            })
              .then(result => {
                console.log(result)
                res.status(200).send({
                  message: "소셜 로그인에 성공했습니다.",
                  userinfo: {
                    id: result.dataValues.id,
                    email: result.dataValues.email,
                    username: result.dataValues.username,
                    photo: result.dataValues.photo,
                    description: result.dataValues.description,
                  }
                })
              })
          })
      }
      else {
        req.session.save(function () {
          req.session.userId = userInfo.dataValues.id
          res.status(200).send({
            message: "소셜 로그인에 성공했습니다.",
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