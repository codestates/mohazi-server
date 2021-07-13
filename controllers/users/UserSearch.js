const { user } = require('../../models')
const { Op } = require('sequelize')

module.exports = {
  get: async (req, res) => {
    const { email } = req.body;
    // console.log(req.query);
    console.log(email);
    await user.findAll({
      where: {
        email: {
          [Op.like] : `%${email}%`
        }
      }
    }).then(users => {
      res.status(200).send({
        userInfo: users
      })
    })
      .catch(err => {
        res.status(400).send({
          err: "일치하는 유저가 존재하지 않습니다."
        })
      })
  }
}