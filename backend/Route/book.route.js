// Route/book.route.js
import express from "express";
import { getBook } from "../controller/book.controller.js"; // Adjust the path as needed

const router = express.Router();

router.get("/", getBook);

export default router;
