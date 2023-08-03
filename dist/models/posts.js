"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testimonial = exports.testiSchemaValidate = void 0;
// importing modules
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
// validation schema
exports.testiSchemaValidate = joi_1.default.object({
    name: joi_1.default.string().required(),
    occupation: joi_1.default.string().required(),
    score: joi_1.default.number().required(),
    testimonies: joi_1.default.string().required(),
    published: joi_1.default.boolean().required(),
});
;
// testimonial schema
const testiSchema = new mongoose_1.Schema({
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
exports.Testimonial = (0, mongoose_1.model)("Testimonial", testiSchema);
