import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
 
    cc:{type:String},
    name:{type:"string"},
    classs:{type:String},
    id:{type:"string"},
    math:{type:Number},
    english:{type:Number},
    kiswahili:{type:Number},
    science:{type:Number},
    social:{type:Number},
    creator:{type:"string"},
  
  
},
{timestamps:true});

const TourModal = mongoose.model("Examreg", tourSchema);

export default TourModal;



// import mongoose from "mongoose";

// },{timestamps:true})


// const TourModal = mongoose.model("Expenses", examSchema);
// export default TourModal;