const { user_daily, dailyCard, selection } = require("../../models");

module.exports = {
  post: async (req, res) => {
    console.log(req.body)
    const { selections } = req.body;
    await dailyCard
      .create({
        admin: req.body.userId,
        photo: "",
        date: req.body.date,
      })
      .then((cardInfo) => {
        // console.log(cardInfo);
        selection
          .create({
            dailyCards_id: cardInfo.dataValues.id,
            memo: "",
            type: selections,
          })
          .then((selections) => {
            // console.log(selections);
            user_daily.create({
              user_id: req.body.userId,
              dailyCards_id: selections.dailyCards_id,
            });
            return res.status(200).send({
              message: "성공적으로 일정을 등록했습니다.",
              dailyCard: cardInfo,
              selections: selections.type,
            });
          });
      });
  },
};
