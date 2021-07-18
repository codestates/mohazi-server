const { user, user_daily, selection, dailyCard } = require("../../models");

// 회원탈퇴의 경우, 내가 만든 카드, 그 카드에 태그된 친구들 다 삭제돼야 함
// user, user_daily, selection, dailyCard table 필요

module.exports = {
  delete: async (req, res) => {
    const { userId } = req.body;

    await user_daily
      .destroy({
        where: {
          user_id: userId,
        },
      })
      .then((rel) => {
        selection
          .destroy({
            where: {
              admin: userId,
            },
          })
          .then((selection) => {
            dailyCard
              .destroy({
                where: {
                  admin: userId,
                },
              })
              .then((card) => {
                user
                  .destroy({
                    where: {
                      id: userId,
                    },
                  })
                  .then((admin) => {
                    if (admin) {
                      return res.status(200).send({
                        message: "성공적으로 회원탈퇴 되었습니다.",
                      });
                    }
                    res
                      .status(400)
                      .send({ message: "유효하지 않은 유저입니다." });
                  });
              });
          });
      })
      .catch((err) => {
        res.status(401).send({
          err: "세션이 만료되었습니다.",
        });
      });
  },
};
