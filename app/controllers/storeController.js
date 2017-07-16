const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const winston = require('../handlers/winston');

const createStore = async(req,res) =>{
  try{
    const store = new Store(req.body);
     await store.save();
     res.status(200).json({
        success:true,
        message: 'Store created'
    });
  }
  catch(err){
    res.status(400).json({
      success:false,
      message:'Invalid request',
      error:err
    });
    winston.log.error(err);
  }
};

const getStores = async(req,res) =>{
  try{
    const stores = await Store.find();
    res.status(200).json(stores);
  }
  catch(err){
    res.status(400).json({
      success:false,
      message:'Invalid request',
      error:err
    });
    winston.log.error(err);
  }
};

const getStore = async(req,res) =>{
  try{
    const store = await Store.findOne({slug:req.params.slug});
    res.status(200).json(store);
  }
  catch(err){
    res.status(400).json({
      success:false,
      message:'Invalid request',
      error:err
    });
    winston.log.error(err);
  }
};

const updateStore = async(req,res)=>{
  try{
    const store = await Store.findOneAndUpdate(
      {id:req.params._id},
      req.body,
      {
      new: true,
      runValidators: true
    });
    res.status(200).json(store);
  }
  catch(err){
    res.status(400).json({
      success:false,
      message:'Invalid request',
      error:err
    });
    winston.log.console.error(err);
  }
};

module.exports ={
  createStore : createStore,
  getStores : getStores,
  getStore : getStore,
  updateStore : updateStore
}
