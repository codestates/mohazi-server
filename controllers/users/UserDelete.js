const { user, user_daily, selection, dailyCard } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  delete: async (req, res) => {
    const { userId } = req.body;

    await dailyCard
      .findAll({
        raw: true,
        where: {
          admin: userId,
        },
      })
      .then((cards) => {
        // console.log("41번 카드들 ", cards);
        return cards.map((el) => el.id);
      })
      .then((IDs) => {
        // console.log(IDs);
        user_daily
          .destroy({
            where: {
              user_id: userId,
            },
          })
          .then((isAdmin) => {
            user_daily
              .destroy({
                where: {
                  dailyCards_id: {
                    [Op.or]: IDs,
                  },
                },
              })
              .then((isCard) => {
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
                      .then((cards) => {
                        user
                          .destroy({
                            where: {
                              id: userId,
                            },
                          })
                          .then((admin) => {
                            if (admin) {
                              return res
                                .status(200)
                                .send({
                                  message: "회원탈퇴가 완료되었습니다.",
                                });
                            }
                            res
                              .status(400)
                              .send({ message: "회원탈퇴를 할 수 없습니다." });
                          });
                      });
                  });
              });
          });
      })
      .catch((err) => {
        res.status(400).send("ERRRRRRRRRRR");
      });
  },
};
