
const express = require('express');
const router = express.Router();
const { getBuses, addBus } = require('../controllers/busController');

router.get('/', getBuses);
router.post('/', addBus);

module.exports = router;
