import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  bookId: {type:String},
  ISNB:{type:String},
  bookTitle:{type:String},
  total:{type:Number},
  creator:String,
  
},
{timestamps:true});

const TourModal = mongoose.model("BooksIn", tourSchema);

export default TourModal;
