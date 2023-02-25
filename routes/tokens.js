import express from "express";
import { createTokens, deleteTokens, getTokens } from "../controllers/tokens.js";
import auth from "../middleware/auth.js";


import noticeModal from "../models/booksIn.js";
const router = express.Router();





router.get("/", getTokens);


router.post("/", createTokens);
router.post("/delete", auth, deleteTokens);


export default router;
