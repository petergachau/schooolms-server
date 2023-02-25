import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String,unique: true},
  password: { type: String },
  id: { type: String },
  isAdmin:{type:Boolean,default:false},
  location:{type:String}

},
{timestamps:true});

export default mongoose.model("User", userSchema);
