
import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
name:{type:String},
empNo:{type:String},
department:{type:String},
amount:{type:Number},
  creator: String,
 
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
},
{timestamps:true});

const TourModal = mongoose.model("stuff", tourSchema);

export default TourModal;
