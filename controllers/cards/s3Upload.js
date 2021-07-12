module.exports = {
  put: async (req, res) => {
      const newFileKey = req.file.key;
      
      if(newFileKey) {
        res.status(200).send({
            key: newFileKey,
            message: "성공적으로 S3에 파일이 업로드되었습니다.",
        })
      } else {
        res.status(400).send({
            message: "error"
        })
      }
    }
}
