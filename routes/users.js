const express = require('express');
const router = express.Router();

const { usersController } = require('../controllers');

const multer = require("multer");
const s3 = require('../config/s3');
const multerS3 = require("multer-s3");
 
const upload = multer({
    storage: multerS3({
        s3,
        bucket: 'mohazig',
        acl: 'public-read-write',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + file.originalname);
        },
    }),
});

router.put("/login", usersController.Login.post);
router.put("/sociallogin", usersController.SocialLogin.post);
router.put("/logout", usersController.Logout.post);
router.put("/signup", usersController.SignUp.post);
router.put("/userupdate", upload.single('image'), usersController.UserUpdate.put);
router.delete("/userdelete", usersController.UserDelete.delete);
router.put('/addfriend', usersController.AddFriend.put);
router.delete('/deletefriend', usersController.DeleteFriend.delete);
router.put("/usersearch", usersController.UserSearch.get);
router.get("/mypage", usersController.MyPage)
router.get("/searchfriends", usersController.SearchFriends)

module.exports = router;