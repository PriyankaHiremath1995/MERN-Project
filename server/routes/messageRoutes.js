const express = require("express");
const { getMessages, createMessage, getMessageById, updateMessage, deleteMessage, getAllMessages } = require("../controller/messageController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/allMessages").get(getAllMessages);
router.route("/").get(protect, getMessages);
router.route("/create").post(protect, createMessage);
router.route("/:id").get(getMessageById).put(protect, updateMessage).delete(protect, deleteMessage);

module.exports = router;