const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.post('/createStore', storeController.createStore);
router.get('/stores', storeController.getStores);
router.get('/store/:slug', storeController.getStore);
router.put('/store/:id', storeController.updateStore);

module.exports = router;
