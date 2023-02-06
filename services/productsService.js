const res = require('express/lib/response');
const Product = require('../models/productsModel');

class ProductsService {
    constructor() {
        this.products = [];
    }

    async find() {
        this.products = await Product.find();
        const products = this.products;
        if(!products){
            return alert('error');
        };
        return products;
    };

    async findOne(id){
        this.products = await Product.findById(id).lean();
        const products = this.products;
        if(!products){
            return alert('error');
        };
        return products;
    }

    async create(data){
        const newProduct = {
            ...data
        }

        if(!newProduct){
            return alert('error');
        };
        const insert = new Product(newProduct);
        await insert.save();
    }

    async update(id, body){
        this.products = await Product.findByIdAndUpdate(id, body);
    }

    async delete(id){
        this.products = await Product.findByIdAndDelete(id);
        return { id }
    }
}

module.exports = ProductsService;