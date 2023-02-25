import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  name: {type:String},
  photo:{type:String},
  id:{type:String},
  
  class:{type:String},
  illness:{type:String},
  recommend:{type:String},
  served:{type:Boolean,default:false},
  creator:String,
  
},
{timestamps:true});

const TourModal = mongoose.model("Medical", tourSchema);

export default TourModal;
