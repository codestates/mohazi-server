const { user, user_daily } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { userId, dailyCardId } = req.query;

  try {
    const friends = await user_daily.findAll({
      raw: true,
      where: {
        dailyCards_id: dailyCardId,
      },
    });

    const userIDs = friends.map((el) => el.user_id);
    if (userIDs.length === 0) {
      return res
        .status(400)
        .send({ message: "친구 목록을 불러올 수 없습니다." });
    }

    const friendsInfo = await user.findAll({
      raw: true,
      where: {
        id: {
          [Op.in]: userIDs,
        },
      },
    });

    res.status(200).send({
      message: `${dailyCardId}번 카드에 속한 유저 목록입니다.`,
      friendsInfo,
    });
  } catch (err) {
    res.status(400).send({ message: "친구 목록을 불러올 수 없습니다." });
  }
};
