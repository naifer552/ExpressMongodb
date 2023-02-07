const Product = require('../models/productsModel');
const boom = require('@hapi/boom');

class ProductsService {
    constructor() {
        this.products = [];
    }

    async find() {
        this.products = await Product.find();
        const products = this.products;
        if(!products){
            throw boom.notFound('Products not found');
        };
        return products;
    };

    async findOne(id){
        this.products = await Product.findById(id).lean();
        const products = this.products;
        if(!products){
            throw boom.notFound('Product not found');
        };
        return products;
    }

    async create(data){
        const newProduct = {
            ...data
        }

        if(!newProduct){
            throw boom.notFound('Product not created');
        };
        const insert = new Product(newProduct);
        await insert.save();
    }

    async update(id, body){
        this.products = await Product.findByIdAndUpdate(id, body);
        if(!this.products){
            throw boom.notFound('Product not updated');
        };
    }

    async delete(id){
        this.products = await Product.findByIdAndDelete(id);
        if(!products){
            throw boom.notFound('Products not deleted');
        };
        return { id }
    }
}

module.exports = ProductsService;