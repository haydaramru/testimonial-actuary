import express from "express";
import { db } from "../config/db.config";
import { router } from "../routes/testimonial.routes";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/testimonial", router);

// db connection then server connection
db.then(() => {
    app.listen(7070, () => {
        console.log("Server is running on port 7070");
    })
});