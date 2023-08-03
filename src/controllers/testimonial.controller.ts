// import modules
import { testiServices } from "../services/post.service";
import { Request, Response } from "express";
import { testiSchemaValidate } from "../models/testimonials";

class testiController {
    
    // add testimonies controller
    addTestimonial = async (req: Request, res: Response) => {
        
        // data to be saved in database
        const data = {
            name: req.body.name,
            occupation: req.body.occupation,
            score: req.body.score,
            testimonies: req.body.testimonies,
            published: req.body.published
        }

        // validating the request
        const { error, value } = testiSchemaValidate.validate(data);

        if(error) {
            res.send(error.message);
        } else {
            // call the create post function in the service and pass the data from the request
            const testimonial = await testiServices.createTestimonials(value)
            res.status(201).send(testimonial)
        }
    }

    // get all testimonies
    getTestimonials = async (req: Request, res: Response) => {
        const testimonials = await testiServices.getTestimonials();
        res.send(testimonials);
    }

    // get a single testimonies
    getATestimonial = async (req: Request, res: Response) => {
        // get id from the parameter
        const id = req.params.id;
        const testimonial = await testiServices.getTestimonial(id);
        res.send(testimonial)
    }

    // update testimonies
    updateTestimonial = async (req: Request, res: Response) => {
        const id = req.params.id;
        const testimonial = await testiServices.updateTestimonial(id, req.body);
        res.send(testimonial)
    }

    // delete a testimonies
    deleteTestimonial = async (req: Request, res: Response) => {
        const id = req.params.id;
        await testiServices.deleteTestimonial(id)
        res.send("Testimonies deleted")
    }
}

// export class
export const TestiController = new testiController();