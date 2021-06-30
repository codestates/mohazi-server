module.exports = {
  post: async (req, res) => {
    req.session.destroy()
    res.status(200).send("로그아웃이 완료되었습니다.")
  }
}