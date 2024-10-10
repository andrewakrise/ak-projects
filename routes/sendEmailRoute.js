const express = require("express");
const router = express.Router();
const contactUsEmailController = require("../controllers/contactUsEmailController");

router.post("/contactus", contactUsEmailController.contactUsEmail);

module.exports = router;
