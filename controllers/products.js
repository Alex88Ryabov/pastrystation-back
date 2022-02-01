const Product = require('../models/Product');
const db = require("../db");
const { request } = require('../app');
// const errorHandler = require('../util/errorHandler');

module.exports.getById = (req, res) => {
    try {
        Product.findOne({ where: { id: req.params.id } })
            .then(product => {
                res.json(product);
            })
    } catch (err) {
        console.log(err)
    }
};

module.exports.getByCategoryId = (req, res) => {
    try {
        Product.findAll({ where: { categoryId: req.params.id } })
            .then(product => {
                res.json(product);
            })
    } catch (err) {
        console.log(err)
    }
};

module.exports.getAll = (req, res) => {
    try {
        Product.findAll()
            .then(products => {
                res.json(products)
            })
            .catch(error => {
                console.log(error)
            })
    } catch (error) {
        errorHandler(res, error);
    }
};

module.exports.create = (req, res) => {   // request, response
    try {

        const product = {
            name: req.body.name,
            imageName: req.body.image.fileName,
            imageFile: req.body.image.file,
            price: req.body.price,
            categoryId: req.body.categoryId,
            description: req.body.description,
            info: req.body.info
        };

        Product.create(product)
            .then(response => {
                res.json({message: `Товар "${response.dataValues.name}" успешно создан`})
            })
            .catch(error => {
                console.log(error)
            })
    } catch (error) {

    }
};
module.exports.remove = (req, res) => {   // request, response
    try {
        Product.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.json({ message: 'Товар успешно удален!' })
            })
            .catch(err => console.log(err))

    } catch (error) {
        console.log(error)
    }
};

module.exports.update = (req, res) => {   // request, response

    const updated = {
        name: req.body.name,
        imageName: req.body.image.fileName,
        imageFile: req.body.image.file,
        price: req.body.price,
        categoryId: req.body.categoryId,
        description: req.body.description,
        info: req.body.info
    }
    try {
        Product.findOne({where: {id: req.params.id}})
            .then(product => {
                product.update(updated)
                    .then(() => {
                        res.json({ message: 'Товар успешно обновлен!' })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    } catch (error) {
        console.log(error)
    }
};