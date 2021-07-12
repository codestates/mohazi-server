const { user } = require('../../models')

module.exports = {
  get: async (req, res) => {
    const { email } = req.body;
    // console.log(req.query);
    // console.log(email);
    await user.findOne({
      where: {
        email: email
      }
    }).then(userInfo => {
      // console.log(userInfo);
      res.status(200).send({
        userInfo: {
          id: userInfo.dataValues.id,
          email: userInfo.dataValues.email,
          username: userInfo.dataValues.username,
          photo: userInfo.dataValues.photo,
          description: userInfo.dataValues.description,
        }
      })
    })
      .catch(err => {
        res.status(400).send({
          err: "일치하는 유저가 존재하지 않습니다."
        })
      })
  }
}