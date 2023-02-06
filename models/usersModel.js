const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: false,
    }
},{
    timestamps: true
});

module.exports = model('Users', UserSchema);