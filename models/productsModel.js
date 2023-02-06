const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    tittle: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false,
    },
    price: {
        type: Number,
        require: true
    },
    quantify: {
        type: Number,
        require: true
    }
},{
    timestamps: true
});

module.exports = model('Product', ProductSchema);