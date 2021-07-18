const { selection, dailyCard } = require("../../models");

module.exports = async (req, res) => {
  const { userId, dailycardId, memo, photo, date } = req.body;

  // console.log("request=", req.body);

  await selection
    .update(
      {
        memo: memo,
        photo: photo,
        date: date,
      },
      {
        where: {
          dailyCards_id: dailycardId,
          // admin: userId,
        },
      }
    )
    .then((updateInfo) => {
      // console.log(updateInfo[0]);
      dailyCard
        .update(
          {
            photo: photo,
            date: date,
          },
          {
            where: {
              id: dailycardId,
              // admin: userId,
            },
          }
        )
        .then((result) => {
          if (updateInfo[0] === 1) {
            return res
              .status(200)
              .send({ message: "카드 수정이 완료되었습니다." });
          }
          res.status(400).send({ message: "카드를 수정할 수 없습니다." });
        });
    })
    .catch(err => {
      res.status(400).send({ message: "카드를 수정할 수 없습니다." })
    })
};
