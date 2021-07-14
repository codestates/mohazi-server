// 해당 card에 어떤 장소들이 들어갔는지 찾는 controller
const { dailyCard, selection } = require("../../models");

module.exports = async (req, res) => {
  const { dailyCardId } = req.body;

  await dailyCard
    .findOne({
      where: {
        id: dailyCardId,
      },
    })
    .then((item) => {
      selection
        .findOne({
          where: {
            dailyCards_id: item.id,
          },
        })
        .then((result) => {
          res.status(200).send({
            message: `${dailyCardId}번 카드의 장소 목록입니다.`,
            selections: result.type,
          });
        });
    })
    .catch((err) => {
      res.status(400).send({ message: "해당 장소를 찾을 수 없습니다." });
    });
};
