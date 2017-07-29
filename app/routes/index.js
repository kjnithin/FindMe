const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post('/api/createStore', storeController.createStore);
router.get('/api/stores', storeController.getStores);
router.get('/api/store/:slug', storeController.getStoreBySlug);
router.put('/api/store/:id', storeController.updateStore);
router.get('/api/storebyid/:id', storeController.getStoreById);
router.get('/api/tags', storeController.getStoreByTag);
router.get('/api/tags/:tag', storeController.getStoreByTag);

router.post('/api/register', userController.userValidation,
                             userController.register,
                             authController.login);
router.post('/api/login', authController.login);
router.get('/api/logout', authController.logout);
router.put('/api/user/update/:id', userController.updateUser);
router.post('/api/auth', userController.googleAuth);


module.exports = router;
