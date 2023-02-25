import express from "express";
import { createAdmission, deleteAdmission, getAdmission, getAdmissionUser } from "../controllers/medicalForm.js";
import auth from "../middleware/auth.js";


import noticeModal from "../models/booksIn.js";
const router = express.Router();


router.get("/search:key", async (req,res)=>{
  let result=await noticeModal.find({
    "$or":[
      {
        houseNo:{$regex:req.params.key},
        
      }
    ]
  })
  res.send(result)
});


router.get("/", getAdmission);
// router.get("/:id", getNotice);

router.post("/",  createAdmission);
router.delete("/:id", auth, deleteAdmission);

router.get("/user/:id", auth, getAdmissionUser);


export default router;
