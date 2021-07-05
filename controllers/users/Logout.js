module.exports = {
  post: async (req, res) => {
    req.session.destroy()
    res.status(200).send({
      message: "로그아웃이 완료되었습니다."
    })
      .catch(err => {
        res.status(401).send({
          err: "세션이 만료되었습니다."
        })
      })
  }
}