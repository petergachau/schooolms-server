import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  name: {type:String},
  photo:{type:String},
  id:{type:String},
  photo:{type:String},
  served:{type:Boolean,default:false},
  creator:String,
  
},
{timestamps:true});

const TourModal = mongoose.model("Bording", tourSchema);

export default TourModal;
