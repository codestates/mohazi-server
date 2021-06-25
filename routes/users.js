var express = require('express');
var router = express.Router();

const { usersController } = require('../controllers');

router.post("/login", usersController.Login.post);
router.post("/logout", usersController.Logout.post);
router.post("/signup", usersController.SignUp.post);
router.patch("/userupdate", usersController.UserUpdate.patch);
router.delete("/userdelete", usersController.UserDelete.delete);
router.get("/usersearch", usersController.UserSearch.get);

module.exports = router;