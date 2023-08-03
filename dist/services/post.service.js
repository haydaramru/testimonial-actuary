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
exports.testiServices = exports.testiService = void 0;
// import module
const posts_1 = require("../models/posts");
class testiService {
    // create a testimonies
    createTestimonials(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTestimonials = yield posts_1.Testimonial.create(data);
                return newTestimonials;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // get all testimonies
    getTestimonials() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const testimonials = yield posts_1.Testimonial.find({});
                return testimonials;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // get a single testimonies
    getTestimonial(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const testimonial = yield posts_1.Testimonial.findById({ _id: id });
                if (!testimonial) {
                    return "Honest Feedack not available :(";
                }
                return testimonial;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // update a testimonies
    updateTestimonial(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // pass the id of the object you want to update
                // data is for the new body you are updating the old one with
                // new:true, so the data being returned, is the updated one
                const testimonialz = yield posts_1.Testimonial.findByIdAndUpdate({ _id: id }, data, { new: true });
                if (!testimonialz) {
                    return "Honest Feedack not available :(";
                }
                return testimonialz;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // delete a testimonies by using find by id and delete
    deleteTestimonial(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const testimonial = yield posts_1.Testimonial.findByIdAndDelete(id);
                if (!testimonial) {
                    return "Honest Feedack not available :(";
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.testiService = testiService;
// export the class
exports.testiServices = new testiService();
