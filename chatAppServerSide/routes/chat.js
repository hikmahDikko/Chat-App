const express = require("express");
const router = express.Router();
const chatRoomController = require('../controllers/chat');

router.get("/", (req, res) => {
    const {userId} = req.query;
    const chats = chatRoomController.getChatRooms(userId);
    return res.send({chats})
});

router.get('/messages', (req, res) => {
    const {userId1, userId2} = req.query;
    const messages = chatRoomController.getChatMessages(userId1, userId2);
    return res.send({messages});
});

module.exports = router;
