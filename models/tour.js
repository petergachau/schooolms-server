import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  term: {type:String},
  name:{type:String},
  class:{type:String},
  fees: {type:Number},
  regNo: {type:String},
  
  // creator: String,
  
 
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
},
{timestamps:true});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;
