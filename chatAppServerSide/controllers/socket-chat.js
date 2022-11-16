const chatRoom = require("../models/chatRoom");
const Message = require("../models/message");

module.exports = (io) => {
    io.sockets.on('connection', (socket) => {
        socket.on('create-room', async (data) => {
            const { sender, receiver, message } = data;
            const newChatRoom = new chatRoom({
                user : [sender, receiver]
            })

            await newChatRoom.save();

            const newMessage = new Message({
                chatRoomId : newChatRoom._id,
                user : receiver,
                body : message
            });

            await newMessage.save();

            socket.join(newChatRoom._id);
            socket.io(newChatRoom._id).emit('message', newMessage);
        });

        socket.on('send-message', async (data) => {
            const { user, chatRoom, message } = data;
            const newMessage = new Message({
                chatRoomId : chatRoom,
                user, 
                body : message
            });

            await newMessage.save();
            socket.io(chatRoom).emit('message', newMessage);
        });
    });
} 