const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        chatRoomId : {
            type : mongoose.SchemaTypes.ObjectId,
            ref : "ChatRoom"
        },
        user : {
            type : mongoose.SchemaTypes.ObjectId,
            ref : "User"
        },
        body : String,
    },
    { timestamps : true }
);

module.exports = mongoose.model("Message", messageSchema);