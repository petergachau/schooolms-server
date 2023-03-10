import express from "express";
import { createNotice, deleteNotice, getNotice, getNoticeByUser, getNotices} from "../controllers/financeClinic.js";
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


router.get("/", getNotices);
router.get("/:id", getNotice);

router.post("/",  createNotice);
router.delete("/:id", auth, deleteNotice);

router.get("/user/:id", auth, getNoticeByUser);


export default router;
