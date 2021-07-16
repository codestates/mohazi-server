const { user } = require("../../models");

// 이미 존재하는 이메일도 비밀번호 변경 시 다시 로그아웃 후 소셜로그인 할 때 DB에 새로 저장됨
// 1. 중복된 이메일이 존재 시 /signup 엔드포인트로 가지 않도록 -> 이미 돼있다?
// 2. social 계정일 경우, 비밀번호 수정이 불가능하도록?

module.exports = {
  post: async (req, res) => {
    const { email, password, name } = req.body;
    await user
      .findOne({
        where: {
          email: email,
        },
      })
      .then((userInfo) => {
        if (!userInfo) {
          user
            .create({
              email: email,
              password: password,
              username: name,
            })
            .then((socialInfo) => {
              req.session.save(function () {
                req.session.userId = socialInfo.dataValues.id;
              });
              user
                .findOne({
                  where: {
                    id: socialInfo.dataValues.id,
                  },
                })
                .then((result) => {
                  // console.log(result);
                  res.status(200).send({
                    message: "소셜 로그인에 성공했습니다.",
                    userInfo: {
                      id: result.dataValues.id,
                      email: result.dataValues.email,
                      username: result.dataValues.username,
                      photo: result.dataValues.photo,
                      description: result.dataValues.description,
                    },
                  });
                });
            });
        } else {
          req.session.save(function () {
            req.session.userId = userInfo.dataValues.id;
            res.status(200).send({
              message: "소셜 로그인에 성공했습니다.",
              userInfo: {
                id: userInfo.dataValues.id,
                email: userInfo.dataValues.email,
                username: userInfo.dataValues.username,
                photo: userInfo.dataValues.photo,
                description: userInfo.dataValues.description,
              },
            });
          });
        }
      });
  },
};
