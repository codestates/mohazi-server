const { selection } = require("../../models");

module.exports = async (req, res) => {
  await selection
    .update(
      {
        type: req.body.selections,
      },
      {
        where: {
          dailyCards_id: req.body.dailycardId,
        },
      }
    )
    .then((result) => {
      res.status(200).send({ message: "성공적으로 장소를 수정했습니다." });
    })
    .catch((error) => {
      res.status(400).send({ err: "err" });
    });
};
