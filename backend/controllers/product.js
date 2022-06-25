const {
    BadRequestError, NotFoundError,
} = require('../error/index');

const Product = require('../models/product');

exports.getProducts = async (req, res, next) =>{
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (err) {
        next (err);
    }
}

exports.createProduct = async(req, res, next) => {
    try {
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            imageLink: req.body.imageLink,
            price: req.body.price
        })
        res.status(201).send(await product.save())
    }   catch (err) {
        if (err.name === 'ValidationError') {
            next(new BadRequestError('Переданы невалидные данные'));
        } else {
          next(err);
        }
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId);

        const isDeletedProduct = await Product.findByIdAndDelete(productId);
        if (isDeletedProduct) {
            res.status(200).send(product);
        } else {
            throw new NotFoundError('Данный продукт не найден');
        }
    } catch (err) {
        if (err.name === 'CastError') {
            next(new BadRequestError('Переданы невалидные данные'));
        } else {
            next(err);
        }
    }
}
