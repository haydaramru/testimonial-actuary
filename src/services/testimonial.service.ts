// import module
import { Testimonial } from "../models/testimonials";
export class testiService {

    // create a testimonies
    async createTestimonials(data: any) {
        try {
            const newTestimonials = await Testimonial.create(data);
            return newTestimonials;
        }
        catch (error) {
            console.log(error);
        }
    }

    // get all testimonies
    async getTestimonials() {
        try {
            const testimonials = await Testimonial.find({});
            return testimonials;
        }
        catch (error) {
            console.log(error);
        }
    }

    // get a single testimonies
    async getTestimonial(id: string) {
        try {
            const testimonial = await Testimonial.findById({_id: id})
            if(!testimonial) {
                return "Honest Feedack not available :("
            }
            return testimonial
        }
        catch (error) {
            console.log(error);
        }
    }

    // update a testimonies
    async updateTestimonial(id: string, data: any) {
        try {
            // pass the id of the object you want to update
            // data is for the new body you are updating the old one with
            // new:true, so the data being returned, is the updated one
            const testimonialz = await Testimonial.findByIdAndUpdate({_id: id}, data, {new: true})
            if(!testimonialz) {
                return "Honest Feedack not available :("
            }
            return testimonialz
        }
        catch (error) {
            console.log(error);
        }
    }

    // delete a testimonies by using find by id and delete
    async deleteTestimonial(id: string) {
        try {
            const testimonial = await Testimonial.findByIdAndDelete(id)
            if(!testimonial) {
                return "Honest Feedack not available :("
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

// export the class
export const testiServices = new testiService();