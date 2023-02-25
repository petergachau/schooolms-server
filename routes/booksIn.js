import express from "express";
import { createBooksIn,  deleteBooksIn,  getBooksIn, getBooksInUser, getNotice} from "../controllers/booksIn.js";
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


router.get("/", getBooksIn);
router.get("/:id", getNotice);

router.post("/",  createBooksIn);
router.delete("/:id", auth, deleteBooksIn);

router.get("/user/:id", auth, getBooksInUser);


export default router;
