const { selection, dailyCard } = require("../../models");

module.exports = async (req, res) => {
  const { dailycardId, memos, photo, friends, date } = req.body;

  console.log('asdsad=' , req.body);

  await selection.update(
    {
      memo: memos,
    },
    {
      where: {
        dailyCards_id: dailycardId,
      },
    }
  )
    .then((updateInfo) => {
      dailyCard.update(
        {
          photo: photo,
          date: date
        },
        {
          where: {
            id: dailycardId,
          },
        }
      )
    })
    .then(result => {
      res.status(200).send({ message: "데일리카드 수정이 완료되었습니다." });
    })
    .catch((err) => {
      res.status(400).send({ err: "err" });
    });
};
