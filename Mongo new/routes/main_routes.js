const express = require('express');
const router = express.Router();

const controller_main = require
('../controllers/main_controller');

router.get('/test', controller_main.test);

module.exports = router;