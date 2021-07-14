const express = require("express");
const router = express.Router();

const { cardsController } = require("../controllers");

const multer = require("multer");
const s3 = require("../config/s3");
const multerS3 = require("multer-s3");

const upload = multer({
  storage: multerS3({
    s3,
    bucket: "mohazig",
    acl: "public-read-write",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + file.originalname);
    },
  }),
});

router.put("/createcard", cardsController.CreateCard.post);
router.get("/dailycardinfo", cardsController.DailyCardInfo);
router.put("/s3upload", upload.single("image"), cardsController.s3Upload.put);
router.put("/s3delete", cardsController.s3Delete.put);
router.delete("/dailycarddelete", cardsController.DailyCardDelete);
router.put("/dailycardupdate", cardsController.DailyCardUpdate);
router.get("/searchtaggedcards", cardsController.SearchTaggedCards);

module.exports = router;
