const express = require("express");
const viewController = require("../controllers/viewsController");
//const authController = require("../controllers/authController");
//const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get("/", viewController.getHome);

module.exports = router;
