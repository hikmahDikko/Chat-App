const ChatRoom = require('../models/chatRoom');
const Message = require("../models/message");

module.exports = {
    async getChatRooms(userId){
        const userChats = await ChatRoom.find({user : 
            { SelectMatch : { $eq : userId} }
        },'_id')
        .sort({ updatedAt : -1 });

        return res.status(200).send({ status: 200, data : userChats });
    },

    async getChatMessages(userId1, userId2) {
        const chatRoom = await ChatRoom.findOne({ user : { $all :  [userId1, userId2] } });
        let messages = [];

        if(chatRoom){
            messages = await Message.find({ chatRoom : chatRoom._id }).sort({ createdAt : 1 })
        }
        return res.send({ status: 200, data : messages });
    }
}