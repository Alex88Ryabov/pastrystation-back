'use strict';
const db = require('./db.js');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();

const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');

const authRoutes = require('./routes/auth');
// const Settings = require('./models/Settings');
// const keys = require('./config/keys');
// const nodemailer = require('nodemailer');

db.sequelize.authenticate()
    .then(() => {
        console.log(`---> ВСТАНОВЛЕНО З'ЄДНАННЯ З БАЗОЮ ДАНИХ`);
        db.sequelize.sync();

    })
    .catch(err => {
        console.log(`---> ПОМИЛКА ЗЄДНАННЯ З БАЗОЮ ДАННИХ:`, err);
    });

app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/products", productsRoutes);


// var transporter = nodemailer.createTransport({
//     service: 'mailgun',
//     auth: {
//         user: 'postmaster@mgun.YourDomainName.com',
//         pass: '**********************************'
//     }
// });
//
// var mailOptions = {
//     from: 'noreply@richpost.com',
//     to: 'andreybutenkoalex@gmail.com',
//     subject: 'Testmail',
//     text: 'Hi, mail sent.'
// };
//
// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

module.exports = app;