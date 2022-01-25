const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/patient');

router.get('/', userCtrl.getAllPatient);

module.exports = router;