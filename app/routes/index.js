const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.post('/api/createStore', storeController.createStore);
router.get('/api/stores', storeController.getStores);
router.get('/api/store/:slug', storeController.getStoreBySlug);
router.put('/api/store/:id', storeController.updateStore);
router.get('/api/storebyid/:id', storeController.getStoreById);

module.exports = router;
