const User = require('../models/usersModel');

class UsersService {
    constructor() {
        this.users = [];
    }

    async find(){
        this.users = await User.find();
        const users = this.users;
        return users;
    }

    async findOne(id){
        this.users = await User.findById(id).lean();
        const user = this.users;
        return user;
    }

    async create(data){
        const newUser = {
            ...data
        }
        const insert = new User(newUser);
        await insert.save();
    }

    async update(id, body){
        this.products = await User.findByIdAndUpdate(id, body);
    }

    async delete(id){
        this.products = await User.findByIdAndDelete(id);
        return { id };
    }
}

module.exports = UsersService;