const { user, user_daily } = require("../../models");

module.exports = {
  post: async (req, res) => {
    await user
      .findOne({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      })
      .then((admin) => {
        user_daily
          .findAll({
            raw: true,
            where: {
              user_id: admin.id,
            },
          })
          .then((cardInfo) => {
            if (!admin) {
              res.status(400).send({
                err: "아이디 또는 비밀번호를 잘못입력했습니다.",
              });
            } else {
              req.session.save(function () {
                req.session.userId = admin.id;
                res.status(200).send({
                  userinfo: {
                    id: admin.id,
                    email: admin.email,
                    username: admin.username,
                    photo: admin.photo,
                    description: admin.description,
                  },
                  cardInfo: cardInfo,
                });
              });
            }
          });
      })
      .catch((err) => {
        res
          .status(400)
          .send({ message: "아이디 또는 비밀번호를 잘못 입력했습니다." });
      });
  },
};
