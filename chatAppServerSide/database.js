const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
    mongoose.connect(process.env.DB_URL,
        {useNewUrlParser : true,
        useUnifiedTopology : true,
    }).then(() => console.log("Connected to mongoDB"))
    .catch((error) => console.log("mongoDB connection error: " + error))
};