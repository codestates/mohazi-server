const { user, user_daily, dailyCard, selection } = require("../../models");

module.exports = async (req, res) => {
  const { userId, dailyCardId } = req.body;

  if (
    await user_daily.findOne({
      where: {
        user_id: userId,
        dailyCards_id: dailyCardId,
      },
    })
  ) {
    return res.status(400).send({ message: "이미 추가된 회원입니다." });
  }

  await user
    .findOne({
      where: {
        id: userId,
      },
    })
    .then((friend) => {
      dailyCard
        .findOne({
          where: {
            id: dailyCardId,
          },
        })

        .then((dailyCard) => {
          if (!dailyCard || !friend) {
            return res
              .status(400)
              .send({ message: "회원을 추가할 수 없습니다." });
          }
          user_daily
            .create({
              user_id: friend.id,
              dailyCards_id: dailyCard.id,
            })
            .then((user_daily) => {
              selection
                .findOne({
                  where: {
                    dailyCards_id: dailyCardId,
                  },
                })
                .then((selection) => {
                  delete friend.password;
                  res.status(200).send({
                    message: `${friend.username} 유저를 카드에 추가했습니다.`,
                    friendInfo: friend,
                    detailDailyInfo: selection.type,
                    dailyCardInfo: dailyCard,
                    userAndDailyCard: user_daily,
                  });
                });
            });
        });
    })
    .catch((error) =>
      res.status(400).send({ message: "회원을 추가할 수 없습니다." })
    );
};
