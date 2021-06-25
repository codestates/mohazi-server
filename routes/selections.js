var express = require('express');
var router = express.Router();

const { selectionsController } = require('../controllers');

router.get("/itemtype", selectionsController.ItemType.get);
router.patch("/selectionupdate", selectionsController.SelectionUpdate.patch);

module.exports = router;