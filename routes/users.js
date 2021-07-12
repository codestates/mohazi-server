const express = require('express');
const router = express.Router();

const { usersController } = require('../controllers');

const multer = require("multer");
var multerS3 = require("multer-s3");
var aws = require("aws-sdk");
const s3 = new aws.S3();

//아래 storage 보관장소에 대한 세팅(자동으로 보관폴더 만들어줌)
// var _storage = multer.diskStorage({

//    //이미지 어디로 넣을거냐
//     destination:function (req,file,cb){
//                    //전역상태
//         cb(null, '../mohazi-client/public/img')
//     },
//     //넣을 파일 이름을 어떻게 할거냐(file.~~)
//     filename:function(req,file,cb){
//         cb(null,`${Date.now()}-bezkoder-${file.originalname}`)
//     }
// })
var _storage = multerS3({
    s3: s3,
    bucket: 'mohazig', // 버킷 이름
    contentType: multerS3.AUTO_CONTENT_TYPE, // 자동을 콘텐츠 타입 세팅
    acl: "public-read", // 클라이언트에서 자유롭게 가용하기 위함
    key: function (req, file, cb) {
        cb(null, '../mohazi-client/public/img/' + `${Date.now()}-bezkoder-${file.originalname}`)
    }
})

//이미지를 필터링하는 기능
var imageFilter = (req, file, cb) => {
    //이미지 파일인지 아닌지 확장자로 판별
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("적합한 이미지 파일 형식이 아닙니다"))
    }
    cb(null, true)
}

const limits = {
    fileSize: 100000
}

//upload 이게 찐 미들웨어 애가 다해먹고 위에 함수는 이 미들웨어를 위한 세팅역할
const upload = multer({
    storage: _storage, fileFilter: imageFilter, limits: limits,
})


router.put("/login", usersController.Login.post);
router.put("/sociallogin", usersController.SocialLogin.post);
router.put("/logout", usersController.Logout.post);
router.put("/signup", usersController.SignUp.post);
router.put("/userupdate", upload.single('image'), usersController.UserUpdate.put);
router.delete("/userdelete", usersController.UserDelete.delete);
router.put("/usersearch", usersController.UserSearch.get);

module.exports = router;