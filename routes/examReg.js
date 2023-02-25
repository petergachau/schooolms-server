import express from "express";
import { createMessage, getMessages ,deleteMessage} from "../controllers/examReg.js";
import auth from "../middleware/auth.js";


import noticeModal from "../models/booksIn.js";
const router = express.Router();





router.get("/", getMessages);


router.post("/", createMessage);
router.post("/delete", auth, deleteMessage);


export default router;
