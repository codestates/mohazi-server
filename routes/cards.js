const express = require('express');
const router = express.Router();

const { cardsController } = require('../controllers');

router.put("/createcard", cardsController.CreateCard.post);
router.put("/addfriends", cardsController.AddFriends);
// router.get("/dailycardinfo", cardsController.DailyCardInfo.get);
router.delete("/dailycarddelete", cardsController.DailyCardDelete);
router.put("/dailycardupdate", cardsController.DailyCardUpdate);
router.get("/mypage", cardsController.MyPage.friends);

module.exports = router;