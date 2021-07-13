// /addfriends
// mypage 내 dailycards에 friends 추가하는 controller
// API) required: 추가할 user email, 현재 dailyCard_id
// response) userInfo
// flow) user 검색 -> 해당 user 현재 dailyCard에 추가 -> user_daily table에 추가된 현재 user_id, 추가된 현재 dailyCards_id 생성
// 결론적으로 같은 dailyCard id를 갖고 있는 유저가 둘 이상 생김

const { user, user_daily, dailyCard, selection } = require("../../models");

module.exports = async (req, res) => {
  console.log('add friends',req.body)
  
  await user.findOne({
    where: {
      id: req.body.userId
    }
  })
  .then(friend => {
    dailyCard.findOne({
      where: {
        id: req.body.dailyCardId
      }
    })
    .then(dailyCard => {
      user_daily.create({
        user_id: friend.id,
        dailyCards_id: dailyCard.id
      })
      .then(user_daily => {
        // console.log(user_daily)
        selection.findOne({
          where: {
            dailyCards_id: req.body.dailyCardId
          }
        })
        .then(selection => {
          // console.log(selection)
          delete friend.password
          res.status(200).send({
            friendInfo: friend,
            detailDailyInfo: selection.type,
            dailyCardInfo: dailyCard,
            userAndDailyCard: user_daily
          })
        })
      })
      })
    })
  .catch(error => console.log(error))
}