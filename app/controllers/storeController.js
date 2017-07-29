const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const winston = require('../handlers/winston');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const createStore = async(req, res) => {
  try {
    const store = new Store(req.body);
    await store.save();
    res.status(200).json({
      success: true,
      message: 'Store created'
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Invalid request',
      error: err
    });
    winston.log.error(err);
  }
};

const getStores = async(req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Invalid request',
      error: err
    });
    winston.log.error(err);
  }
};

const getStoreBySlug = async(req, res, next) => {
  try {
    const store = await Store.findOne({
      slug: req.params.slug
    });
    if (!store) return next();
    res.status(200).json(store);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid request',
      error: error
    });
    winston.log.error(error);
  }
};

const getStoreById = async(req, res, next) => {
  try {
    const store = await Store.findOne({
      _id: req.params.id
    });
    if (!store) return next();
    res.status(200).json(store);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid request',
      error: error
    });
    winston.log.error(error);
  }
};

const updateStore = async(req, res) => {
  try {
    req.body.location.type = 'Point';
    const store = await Store.findOneAndUpdate({
        _id: req.params.id
      },
      req.body, {
        new: true,
        runValidators: true
      });
    res.status(200).json(store);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid request',
      error: error
    });
    winston.log.error(error);
  }
};

const getStoreByTag = async(req, res) => {
  try {
    const tag = req.params.tag;
    const tagQuery = tag || {
      $exists: true
    };
    const tagsPromise = Store.getTagsList();
    const storesPromise = Store.find({
      tags: tagQuery
    })
    const [tags, stores] = await Promise.all([tagsPromise, storesPromise]);
    res.status(200).json([tags, stores])
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invlid request',
      error: error
    });
    winston.log.error(error);
  }

};

module.exports = {
  createStore: createStore,
  getStores: getStores,
  getStoreBySlug: getStoreBySlug,
  getStoreById: getStoreById,
  updateStore: updateStore,
  getStoreByTag: getStoreByTag
}
