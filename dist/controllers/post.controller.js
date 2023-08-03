"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestiController = void 0;
// import modules
const post_service_1 = require("../services/post.service");
const posts_1 = require("../models/posts");
class testiController {
    constructor() {
        // add testimonies controller
        this.addTestimonial = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // data to be saved in database
            const data = {
                name: req.body.name,
                occupation: req.body.occupation,
                score: req.body.score,
                testimonies: req.body.testimonies,
                published: req.body.published
            };
            // validating the request
            const { error, value } = posts_1.testiSchemaValidate.validate(data);
            if (error) {
                res.send(error.message);
            }
            else {
                // call the create post function in the service and pass the data from the request
                const testimonial = yield post_service_1.testiServices.createTestimonials(value);
                res.status(201).send(testimonial);
            }
        });
        // get all testimonies
        this.getTestimonials = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const testimonials = yield post_service_1.testiServices.getTestimonials();
            res.send(testimonials);
        });
        // get a single testimonies
        this.getATestimonial = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // get id from the parameter
            const id = req.params.id;
            const testimonial = yield post_service_1.testiServices.getTestimonial(id);
            res.send(testimonial);
        });
        // update testimonies
        this.updateTestimonial = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const testimonial = yield post_service_1.testiServices.updateTestimonial(id, req.body);
            res.send(testimonial);
        });
        // delete a testimonies
        this.deleteTestimonial = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield post_service_1.testiServices.deleteTestimonial(id);
            res.send("Testimonies deleted");
        });
    }
}
// export class
exports.TestiController = new testiController();
