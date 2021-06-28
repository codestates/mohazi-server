var express = require('express');
var router = express.Router();

const { selectionsController } = require('../controllers');

router.get("/cafelists", selectionsController.CafeLists);
router.get("/parklists", selectionsController.ParkLists);
// router.get("/exhibitionlists", selectionsController.ExhibitionLists);
// router.get("/malllists", selectionsController.MallLists);
router.get("/restaurantlists", selectionsController.RestaurantLists);
// router.patch("/selectionupdate", selectionsController.SelectionUpdate.patch);

module.exports = router;