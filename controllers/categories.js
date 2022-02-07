const Category = require('../models/Category');
const db = require("../db");
const { request } = require('../app');
// const errorHandler = require('../util/errorHandler');

module.exports.getById = (req, res) => {
    try {
        Category.findOne({ where: { id: req.params.id } })
            .then(category => {
                res.json(category);
            })
    } catch (err) {
        console.log(err)
    }
}

module.exports.getAll = (req, res) => {
    try {
        Category.findAll()
            .then(categories => {
                res.json(categories)
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
        const categoryName = {
            name: req.body.name,
            imageSrc: req.file ? req.file.path : ''
        };

        Category.create(categoryName)
            .then(response => {
                res.json({ message: `Категория "${response.dataValues.name}" успешно создана` })
            })
            .catch(error => {
                console.log(error)
            })
    } catch (error) {
    }
};

module.exports.remove = (req, res) => {   // request, response
    try {
        Category.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.json({ message: 'Категория успешно удалена!' })
            })
            .catch(err => console.log(err))

    } catch (error) {
        console.log(error)
    }
};

module.exports.update = (req, res) => {   // request, response

    const updated = {
        name: req.body.name,
        imageSrc: req.file ? req.file.path : ''
    }
    try {
        Category.findOne({where: {id: req.params.id}})
            .then(category => {
                category.update(updated)
                    .then(() => {
                        res.json({ message: 'Категория успешно обновлена!' })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    } catch (error) {
        console.log(error)
    }
};
