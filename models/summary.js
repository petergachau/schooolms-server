import mongoose from "mongoose";

const summarySchema = mongoose.Schema({
  
  name:{type:String},
  empNo:{type:String},
  amount: {type:Number},
  
  department: {type:String},
  
},
{timestamps:true});

const TourModal = mongoose.model("Summary", summarySchema);

export default TourModal;
