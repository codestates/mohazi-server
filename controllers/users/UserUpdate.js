const { user } = require('../../models')

module.exports = {
  patch: async (req, res) => {
    const { userId, email, username, password, photo, description } = req.body
    console.log(req.body)

    await user.update({
      username: username,
      password: password,
      photo: photo,
      description: description,
    }, {
      where: {
        id: userId
      }
    }).then(userInfo => {
      return res.status(200).send({
        message: "성공적으로 정보를 바꾸었습니다.",
        // userInfo: {
        //   userId: userInfo.userId,
        //   email: userInfo.email,
        //   username: userInfo.username,
        //   photo: userInfo.photo,
        //   description: userInfo.description,
        // }
      })
    })
      .catch(err => {
        res.status(400).send("err")
      })
  }
}
