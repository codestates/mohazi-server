const { user } = require('../../models')

module.exports = {
  patch: async (req, res) => {
    const { UserId, Email, Username, Password, Photo, Description } = req.body
    console.log(req.session)

    //console.log(req);
    // console.log(req.body);
    // console.log(req.file);
    // console.log(UserId);

    await user.update({
      username: Username,
      password: Password,
      photo: req.file.path,
      description: Description,
    }, {
      where: {
        id: UserId
      }
    }).then(userInfo => {
      console.log(userInfo);
      return res.status(200).send({
        message: "성공적으로 정보를 바꾸었습니다.",
      })
    })
      .catch(err => {
        res.status(400).send({
          err: "err"
        })
      })
  }
}
