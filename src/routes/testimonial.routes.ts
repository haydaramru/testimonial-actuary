// importing modules
import express, { text } from "express";
import { TestiController } from "../controllers/post.controller";

// initializing the router
export const router = express.Router();

// add post route
router.post("/", TestiController.addTestimonial);

// get posts
router.get("/", TestiController.getTestimonials);

// get single post
router.get("/", TestiController.getATestimonial);

// update a post
router.put("/", TestiController.updateTestimonial);

// delete a post
router.delete("/:id", TestiController.deleteTestimonial);