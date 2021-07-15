const s3 = require('../../config/s3');

module.exports = {
  put: async (req, res) => {

    console.log('req',req.body)

        s3.deleteObject({
          Bucket : 'mohazig',
          Key: req.body.key
        }, function(err, data){
          if(data) {
            console.log(data)
            return res.status(200).send({
              message: "성공적으로 S3에서 정보가 삭제되었습니다.",
            })
          } else {
            console.log(err)
            res.status(400).send({
                message: "error"
            })
          }
        })
      }
}
