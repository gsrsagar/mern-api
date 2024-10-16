const express = require("express");
const postController = require("../controllers/usersController");

const router = express.Router();






router.get("",postController.getAllPosts);
router.post("",postController.createUser);
router.put("/:id",postController.updateUser);
router.delete("/:id",postController.deleteUser)
router.get("/:id",postController.getById)


module.exports = router