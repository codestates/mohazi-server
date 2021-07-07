const express = require('express');
const router = express.Router();

const { usersController } = require('../controllers');

router.put("/login", usersController.Login.post);
router.put("/logout", usersController.Logout.post);
router.put("/signup", usersController.SignUp.post);
router.put("/userupdate", usersController.UserUpdate.patch);
router.delete("/userdelete", usersController.UserDelete.delete);
router.get("/usersearch", usersController.UserSearch.get);

module.exports = router;