const { user, user_daily, dailyCard, selection } = require("../../models");
const { Op } = require("sequelize");
// 1. friends show 엔드포인트 따로 분기
// 2. 나머지 selection까지를 /mypage 로 response
// 3. 그마저 힘들면 selection show 엔드포인트 따로 분기

// /detailcardinfo 로 가서 해당 카드만의 정보만 뽑는다면?

module.exports = async (req, res) => {
  // /searchfriends의 required 로
  // 1. userId
  // 2. dailyCardId
  const { dailyCardId } = req.body;

  try {
    // const admin = await user.findOne({
    //   where: {
    //     id: userId,
    //   },
    // });

    // const cards = await user_daily.findAll({
    //   raw: true,
    //   where: {
    //     user_id: admin.id,
    //   },
    // });
    // // console.log(cards);
    // const cardIDs = cards.map((card) => {
    //   return card.dailyCards_id;
    // });
    // console.log(cardIDs); // 데일리카드ID들(array)

    ///////////// 현재 데일리카드ID 뽑음 ///////////////

    // 1. 단순하게 user_daily에서 dasilyCards_id만 뽑고
    // 2. 해당 카드의 id에 속해있는 user들 찾고
    // 3. return

    const friends = await user_daily.findAll({
      // 나와 같은 카드를 공유하고 있는 친구들
      raw: true,
      where: {
        dailyCards_id:
          // [Op.and]: cardIDs, dailyCardId
          dailyCardId,
        // user_id: {
        //   [Op.not]: userId,
        // },
      },
    });
    // console.log(friends);

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

    ///////////// 9번 유저가 갖고 있는 모든 카드들 중 한 카드에라도 태그돼 있는 친구들 /////////

    res.status(200).send({
      message: `${dailyCardId}번 카드에 속한 유저 목록입니다.`,
      // friends: userIDs, cards: cardIDs,
      friendsInfo,
    });
  } catch (err) {
    // console.log(err);
    res.status(400).send(err);
  }
};
