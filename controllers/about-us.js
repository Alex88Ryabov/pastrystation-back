const AboutData = require('../models/About-us');
const db = require("../db");
const { request } = require('../app');
// const errorHandler = require('../util/errorHandler');



module.exports.get = (req, res) => {
    try {
        AboutData.findAll()
            .then(about => {
                res.json(about)
            })
            .catch(error => {
                console.log(error)
            })
    } catch (error) {
        errorHandler(res, error);
    }
};






module.exports.update = (req, res) => {   // request, response
    const updated = {
        title: req.body.title,
        description: req.body.description
    };
    try {
        AboutData.findOne({where: {id: req.params.id}})

            .then(about => {
                about.update(updated)
                    .then(() => {
                        res.json({ message: 'Запись успешно обновлена!' })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    } catch (error) {
        console.log(error)
    }
};