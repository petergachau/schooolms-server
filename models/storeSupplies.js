import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
    itemdescription: {type:String},
    quantitysupplied:{type:String},
    dateofissued:{type:String},
    receivingofficer:{type:String},
    issuingofficer:{type:String},
  creator:String,
  
},
{timestamps:true});

const TourModal = mongoose.model("Issue", tourSchema);

export default TourModal;
