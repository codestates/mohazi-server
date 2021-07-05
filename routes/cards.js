const express = require('express');
const router = express.Router();

const { cardsController } = require('../controllers');

router.post("/createcard", cardsController.CreateCard.post);
// router.get("/dailycardinfo", cardsController.DailyCardInfo.get);
// router.delete("/dåailycarddelete", cardsController.DailyCardDelete.delete);
// router.patch("/dailycardupdate", cardsController.DailyCardUpdate.patch);
// router.get("/mypage", cardsController.MyPage.get);

module.exports = router;