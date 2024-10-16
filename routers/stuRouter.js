const express = require("express");
const  controller = require("../controllers/stuController");
const  validator  = require("../validators/validation");
const router = express.Router();


router.post("",controller.singUpStudent);
router.get("",validator.valdiateToken,controller.getAllStudents);
router.post("/login",controller.loginStudent)
router.get("/logout",controller.logoutStudent);

module.exports = router;