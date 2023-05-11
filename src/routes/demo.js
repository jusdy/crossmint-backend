const express = require("express");
const listController = require("../controllers/listController");
const router = express.Router();
const { upload } = require("../middleware/multer");

router.route("/list").get(listController.getItemList);
router.route("/salelist").get(listController.getSaleList);
router.route("/remove").post(listController.deleteItem);

module.exports = router;