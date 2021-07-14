const { user } = require('../../models');
const s3 = require('../../config/s3');
const UserSearch = require('./UserSearch');
const SelectionUpdate = require('../selections/SelectionUpdate');

module.exports = {
  put: async (req, res) => {
    const { userId, username, password, photo, description } = req.body
    // console.log(req.session)

    //console.log(req.body);
    // console.log(req.body);
    //console.log('여기',req.file.filename);
    // console.log(UserId);
    //console.log('req. file:', req.body.photo)

    await user
      .findOne({ where: { id: userId } })
      .then(res => {
        const prevPhoto = res.dataValues.photo;
        
        s3.deleteObject({
          Bucket : 'mohazig',
          Key: prevPhoto
        }, function(err, data){
          if(data) {
            console.log('delete success', data)
          } else {
            console.log(err)
          }
        });
      })
      .then(response => {
        user.update({
          username: username,
          password: password,
          photo: photo,
          description: description,
        }, {
          where: {
            id: userId
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
      })
  }
}