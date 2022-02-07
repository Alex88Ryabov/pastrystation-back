const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, 'uploads/')
    },

    filename(req, file, callback) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        callback(null, `${date}-${file.originalname}`)
    }
})

module.exports = multer({storage: storage});