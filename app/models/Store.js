const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');


const StoreSchema = new mongoose.Schema({
  name: {
   type: String,
   trim: true,
   required: 'Please enter the Store name'
  },
  slug: {
    type: String
  },
  description: {
    type: String,
    trim: true
  },
  tags: [{
    type: String
  }],
  created: {
    type: Date,
    default: Date.now
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [{
      type: Number,
      required: 'Please provide the coordinates'
    }],
    address: {
      type: String,
      required: 'Please provide the address'
    }
  },
  owner:{
    type:mongoose.Schema.ObjectId,
    ref:'User',
    required:'Please provide the owner'
  },
  photo:String
});


StoreSchema.pre('save', async function(next){
  if(!this.isModified('name')){
    return next();
  }
  this.slug = slug(this.name);
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`,'i');
  const storeWithSlug = await this.constructor.find({slug: slugRegEx});
  if(storeWithSlug.length){
    this.slug = `${this.slug}-${storeWithSlug.length+1}`;
  }
  next();
});

StoreSchema.statics.getTagsList = function(){
  return this.aggregate([
    {$unwind : '$tags'},
    {$group : {_id:'$tags', count:{$sum : 1}}},
    {$sort:{count : -1}}
  ]);
}

module.exports = mongoose.model('Store', StoreSchema);
