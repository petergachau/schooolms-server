import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
    bookid: {type:String},
    isnbno:{type:String},
  booktitle:{type:String},
  author:{type:String},
  period:{type:String},
  date:{type:String},
  in:{type:Boolean,default:true},
  creator:String,
  
},
{timestamps:true});

const TourModal = mongoose.model("Borrowed", tourSchema);

export default TourModal;