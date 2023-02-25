import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  name: {type:String},
  class:{type:String},
  adm:{type:String},
  age:{type:Number},
  pNumber:{type:Number},
  pANumber:{type:Number},
  pname:{type:String},
  disability:{type:String},
  disabilitYes:{type:String},
  creator:String,
  
},
{timestamps:true});

const TourModal = mongoose.model("admission", tourSchema);

export default TourModal;
