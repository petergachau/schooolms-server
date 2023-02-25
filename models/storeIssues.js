import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
    itemdescription: {type:String},
    quantitysupplied:{type:String},
    date:{type:String},
    suppliername:{type:String},
  creator:String,
  
},
{timestamps:true});

const TourModal = mongoose.model("Supplie", tourSchema);

export default TourModal;
