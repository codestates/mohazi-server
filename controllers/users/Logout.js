module.exports = {
  post: async (req, res) => {
    // console.log(req.session)
    if (req.session) {
      req.session.destroy();
      // console.log('session', req.session)
      return res.status(200).send({
        message: "로그아웃이 완료되었습니다.",
      });
    }
    res.status(401).send({
      err: "세션이 만료되었습니다.",
    });
  },
};
