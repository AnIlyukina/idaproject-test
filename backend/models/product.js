const mongoose = require('mongoose');
const validator = require('validator');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength:[2, 'Минимальная строка 2 символа']
    },
    description: {
        type: String,
        required: false
    },
    imageLink: {
        type: String,
        required: true,
        validate: {
            validator(url) {
                return validator.isURL(url);
            }
        }
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('product', productSchema)
