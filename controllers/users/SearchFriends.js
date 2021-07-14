// request
// 1. userId
// 2. dailyCardId
const { user, user_daily } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { dailyCardId } = req.query;
  
  try {
    console.log('query',req.query)

    const friends = await user_daily.findAll({
      raw: true,
      where: {
        dailyCards_id: dailyCardId,
      },
    });
    //console.log('확인',friends);

    const userIDs = friends.map((el) => el.user_id);
    // console.log(userIDs)
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
    // console.log(friendsInfo);

    res.status(200).send({
      message: `${dailyCardId}번 카드에 속한 유저 목록입니다.`,
      friendsInfo,
    });
  } catch (err) {
    // console.log(err);
    res.status(400).send(err);
  }
};
