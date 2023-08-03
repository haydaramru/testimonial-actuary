// importing modules
import { Schema, model } from "mongoose";
import Joi, { boolean, number } from "joi";

// validation schema
export const testiSchemaValidate = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    score: Joi.number().required(),
    testimonies: Joi.string().required(),
    published: Joi.boolean().required(),
});

// creating an interface
interface testiInterface {
    name: string,
    occupation: string,
    score: number,
    testimonies: string,
    published: boolean,
};

// testimonial schema
const testiSchema = new Schema<testiInterface>({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
    },
    score: {
        type: Number,
        required: true
    },
    testimonies: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        required: true,
        default: false
    }
});

// creating a model
export const Testimonial = model<testiInterface>("Testimonial", testiSchema);