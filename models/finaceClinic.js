import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  budgetMed: {type:Number},
  amount:{type:Number},
  remarks:{type:String},
  
  
},
{timestamps:true});

const TourModal = mongoose.model("Expenses", tourSchema);

export default TourModal;
