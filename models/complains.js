import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  termlyBgt:{type:Number},
  maintance:{type:Number,required:true},
  remarks:{type:String},
  // amount: {type:Number,required:true},
 
 
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
},
{timestamps:true});

const TourModal = mongoose.model("complain", tourSchema);

export default TourModal;
