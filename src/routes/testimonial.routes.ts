// importing modules
import express from "express";
import { TestiController } from "../controllers/testimonial.controller";

// initializing the router
export const router = express.Router();

// add post route
router.post("/", TestiController.addTestimonial);

// get posts
router.get("/", TestiController.getTestimonials);

// get single post
router.get("/:id", TestiController.getATestimonial);

// update a post
router.put("/:id", TestiController.updateTestimonial);

// delete a post
router.delete("/:id", TestiController.deleteTestimonial);