const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const winston = require('../handlers/winston');

const createStores = async(req,res) =>{
  try{
    const stores = new Store(req.body);
    await stores.save();
    res.status(200).json({
        success:true,
        message: 'Store created'
    });
  }
  catch(err){
    res.status(400).json(err);
    winston.log.error(err);
  }
};

const getStores = async(req,res) =>{
  try{
    const stores = await Store.find();
    res.status(200).json(stores);
  }
  catch(err){
    res.status(400).json(err);
    winston.log.error(err);
  }
};

const getStore = async(req,res) =>{
  try{
    const store = await Store.findOne({slug:req.params.slug});
    res.status(200).json(store);
  }
  catch(err){
    res.status(400).json(err);
    winston.log.error(err);
  }
};

module.exports ={
  createStores : createStores,
  getStores : getStores,
  getStore : getStore
}
