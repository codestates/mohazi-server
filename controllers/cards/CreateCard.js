const { user_daily, dailyCard, selection } = require("../../models");

module.exports = {
  post: async (req, res) => {
    // console.log(req);
    await dailyCard
      .create({
        user_id: req.body.userId,
        photo: "",
        date: req.body.date,
      })
      .then((cardInfo) => {
        // console.log(cardInfo);
        selection
          .create({
            dailyCards_id: cardInfo.dataValues.id,
            memo: "",
            type: req.body.selections,
            photo: cardInfo.dataValues.photo,
            date: cardInfo.dataValues.date,
          })
          .then((selections) => {
            console.log(selections);
            user_daily.create({
              user_id: req.body.userId,
              dailyCards_id: selections.dailyCards_id,
            });
            // for (let i in selections) {
            return res.status(200).send({
              dailyCard: cardInfo,
              selections: selections.type,
              message: "성공적으로 일정을 등록했습니다.",
            });
          // }
          });
      });
  },
};
