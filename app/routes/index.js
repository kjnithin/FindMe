const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.post('/createStores', storeController.createStores);
router.get('/stores', storeController.getStores);
router.get('/store/:slug', storeController.getStore);

module.exports = router;
