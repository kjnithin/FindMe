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
  }
});


StoreSchema.pre('save', async function(next){
this.slug = this.name;
  next();
})


module.exports = mongoose.model('Store', StoreSchema);
