import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  
  remarks:{type:String},
  maintance:{type:Number},
   termlyBgt:{type:Number},
  // currentRead:{type:Number},
  // lastRead:{type:Number},

 
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
});

const TourModal = mongoose.model("Boarding", tourSchema);

export default TourModal;
