const { user } = require('../../models')

module.exports = {
  get: async (req, res) => {
    const { email } = req.body

    await user.findOne({
      where: {
        email: email
      }
    }).then(userInfo => {
      res.status(200).send({
        id: userInfo.dataValues.id,
        email: userInfo.dataValues.email,
        username: userInfo.dataValues.username,
        photo: userInfo.dataValues.photo,
        description: userInfo.dataValues.description,
      })
    })
      .catch(err => {
        res.status(400).send("err")
      })
  }
}