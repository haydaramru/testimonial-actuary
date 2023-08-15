"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// importing modules
const express_1 = __importDefault(require("express"));
const testimonial_controller_1 = require("../controllers/testimonial.controller");
// initializing the router
exports.router = express_1.default.Router();
// add post route
exports.router.post("/", testimonial_controller_1.TestiController.addTestimonial);
// get posts
exports.router.get("/", testimonial_controller_1.TestiController.getTestimonials);
// get single post
exports.router.get("/:id", testimonial_controller_1.TestiController.getATestimonial);
// update a post
exports.router.put("/:id", testimonial_controller_1.TestiController.updateTestimonial);
// delete a post
exports.router.delete("/:id", testimonial_controller_1.TestiController.deleteTestimonial);
