const express = require('express');
const router = express.Router();

const bpmCtrl = require('../controllers/bpm');

router.get('/', bpmCtrl.getAllBpm);
router.get('/:userId',bpmCtrl.getUserBpm);
router.post('/',bpmCtrl.createBpm);

module.exports = router;