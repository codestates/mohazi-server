const { selection, dailyCard } = require("../../models");

module.exports = async (req, res) => {
  const { dailycardId, memos, photo, friends, date } = req.body;

  await selection
    .update(
      {
        memo: memos,
        // photo: photo, // dailyCard table에서 변경
        // friends: friends,
        // date: date, // dailyCard table에서 변경
      },
      {
        where: {
          dailyCards_id: dailycardId,
        },
      }
    )
    .then((result) => {
      res.status(200).send({ message: "데일리카드 수정이 완료되었습니다." });
    })
    .catch((err) => {
      res.status(400).send({ err: "err" });
    });
};
