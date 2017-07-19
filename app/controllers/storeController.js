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

const getStoreBySlug = async(req,res) =>{
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

const getStoreById = async(req,res) =>{
  try{
    const store = await Store.findOne({_id:req.params.id});
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
      {_id:req.params.id},
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
  getStoreBySlug : getStoreBySlug,
  getStoreById : getStoreById,
  updateStore : updateStore
}
