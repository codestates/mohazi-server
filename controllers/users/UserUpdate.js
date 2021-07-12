const { user } = require('../../models');
const s3 = require('../../config/s3');

module.exports = {
  put: async (req, res) => {
    const { UserId, Email, Username, Password, Photo, Description } = req.body
    // console.log(req.session)

    console.log(req.body);
    // console.log(req.body);
    //console.log('여기',req.file.filename);
    // console.log(UserId);
    console.log('req. file:', req.file.key)

    await user
      .findOne({ where: { id: UserId } })
      .then(res => {
        const prevPhoto = res.dataValues.photo;
        
        s3.deleteObject({
          Bucket : 'mohazig',
          Key: prevPhoto
        }, function(err, data){
          if(data) {
            console.log(data)
          } else {
            console.log(err)
          }
        });
      });

    await user.update({
      username: Username,
      password: Password,
      photo: req.file.key,
      description: Description,
    }, {
      where: {
        id: UserId
      }
    }).then(userInfo => {

      // console.log(userInfo);
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
