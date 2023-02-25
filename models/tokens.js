import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
 
    
    name:{type:String},
    
    id:{type:"string"},
    token:{type:Number},
    year:{type:Number},
    subject:{type:String},
    sub:{type:String},
    creator:{type:"string"},
  
  
},
{timestamps:true});

const TourModal = mongoose.model("tokens", tourSchema);

export default TourModal;


