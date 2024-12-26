"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import bodyParser from "body-parser";
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// ROUTE IMPORTS
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
// CONFIGARATIONS
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("common"));
// app.use(express.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("this is home route");
});
//ROUTE
app.use("/projects", projectRoutes_1.default);
// SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
