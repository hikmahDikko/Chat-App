const mongoose = require("mongoose");

const chatRoomSchema = mongoose.Schema(
    {
        user : [{
            type : mongoose.SchemaTypes.ObjectId,
            ref : "User"
        }]
    },
    { timestamps : true }
);

module.exports = mongoose.model("ChatRoom", chatRoomSchema);