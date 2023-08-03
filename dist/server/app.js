"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = require("../config/db.config");
const post_routes_1 = require("../routes/post.routes");
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use("/express-typescript/v1/testimonial", post_routes_1.router);
// db connection then server connection
db_config_1.db.then(() => {
    app.listen(7070, () => {
        console.log("Server is running on port 7070");
    });
});
