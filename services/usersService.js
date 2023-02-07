const User = require('../models/usersModel');
const boom = require('@hapi/boom');

class UsersService {
    constructor() {
        this.users = [];
    }

    async find(){
        this.users = await User.find();
        const users = this.users;
        if (!users) {
            throw boom.notFound('Users not found');        
        }
        return users;
    }

    async findOne(id){
        this.users = await User.findById(id).lean();
        const user = this.users;
        if (!users) {
            throw boom.notFound('User not found');        
        }
        return user;
    }

    async create(data){
        const newUser = {
            ...data
        }
        const insert = new User(newUser);
        if (!users) {
            throw boom.notFound('User not created');        
        }
        await insert.save();
    }

    async update(id, body){
        this.products = await User.findByIdAndUpdate(id, body);
        if (!this.products) {
            throw boom.notFound('User not updated');        
        }
    }

    async delete(id){
        this.products = await User.findByIdAndDelete(id);
        if (!this.products) {
            throw boom.notFound('User not deleted');        
        }
        return { id };
    }
}

module.exports = UsersService;