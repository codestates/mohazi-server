// dailyCard, user_daily, selection 세 곳에서 삭제해야 함.
const { dailyCard, user_daily, selection } = require("../../models");

module.exports = async (req, res) => {
  console.log('id', req.body)
  await user_daily
    .destroy({
      where: {
        dailyCards_id: req.body.dailycardId,
      },
    })
    .then((response) => {
      selection
        .destroy({
          where: {
            dailyCards_id: req.body.dailycardId,
          },
        })
        .then((response) => {
          dailyCard.destroy({
            where: {
              id: req.body.dailycardId,
            },
          });
        })
        .then((result) => {
          res.status(200).send({ message: "카드삭제가 완료되었습니다." });
        })
        .catch((err) => {
          res.status(400).send({ err: "err" });
        });
    });
};
