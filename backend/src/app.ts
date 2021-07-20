import express  from 'express';
import callRoutes from "./routes/call-routes";
import path from "path";
import {ConvertorNumbersToCharacters} from "./utils/convertor-numbers-to-characters";
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const app = express();
const port = process.env.PORT;


app.listen(port,() => {
    console.log("The server is running.");
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// routes
app.use('/v1/call', callRoutes);






