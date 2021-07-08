const express = require('express');
const router = express.Router();

const { selectionsController } = require('../controllers');

router.get("/cafelists", selectionsController.CafeLists);
router.get("/sightlists", selectionsController.SightLists);
router.get("/exhibitionlists", selectionsController.ExhibitionLists);
router.get("/marketlists", selectionsController.MarketLists);
router.get("/restaurantlists", selectionsController.RestaurantLists);
router.get("/landing", selectionsController.Landing.get);
router.get("/itemtype", selectionsController.ItemType);
// router.patch("/selectionupdate", selectionsController.SelectionUpdate.patch);

module.exports = router;