import express from "express"
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import http from "http";
import BrandRoutes from "./Routes/BrandRoute";


const PORT = 3000;

const app = express();
http.createServer(app);
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

const mongoUrl = "mongodb://127.0.0.1:27017/Boycott"

mongoose
    .connect(mongoUrl)
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/brand", BrandRoutes);


app.listen(PORT, () => {
    console.log(`app live on port ${PORT}`);
});
