const express = require('express');
const { analyseFile } = require('../controllers/fileanalyseController');
const router = express.Router();
const multer = require('multer');
const memStorage = multer.memoryStorage(); // use memory storage
//const upload = multer({ dest: './uploads' });
const upload = multer({ storage: memStorage });

// routes
router.route('/').post(upload.single('upfile'), analyseFile);

module.exports = router;
