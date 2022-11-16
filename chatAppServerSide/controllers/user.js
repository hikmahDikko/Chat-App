const User = require("../models/user");

module.exports = {
    async register(name) {
        try {
            const ifUserExists = await User.findOne({name});

            if(ifUserExists) return ifUserExists;

            if(!ifUserExists) {
                const newUser = await User.create({name});
                return newUser;
            }
               
        } catch (error) {
            console.log(error)
        }
    },

    async getUsers(){
        const users = await User.find({});
        return users;
    }
}