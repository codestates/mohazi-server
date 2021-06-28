var express = require('express');
var router = express.Router();

const { selectionsController } = require('../controllers');

router.get("/cafelists", selectionsController.CafeLists.get);
// router.patch("/selectionupdate", selectionsController.SelectionUpdate.patch);

module.exports = router;