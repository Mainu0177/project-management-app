import express from "express";
import dotenv from "dotenv";
// import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// ROUTE IMPORTS
import projectRoutes from "./routes/projectRoutes"


// CONFIGARATIONS
dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("common"));
// app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use(bodyParser.json());

app.get("/", (req, res) =>{
    res.send("this is home route");
});

//ROUTE
app.use("/projects", projectRoutes)

// SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
