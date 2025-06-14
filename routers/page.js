const express = require("express");
const { getHomePage, getAboutPage, getContactPage, postSubmitData } = require("../controllers/page");
const router = express.Router();


router.route('/').get(getHomePage)

router.route('/about').get(getAboutPage)

router.route('/contact').get(getContactPage)

router.route('/submit').post(postSubmitData)

module.exports = router;