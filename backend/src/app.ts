import express  from 'express';
import callRoutes from "./routes/call-routes"
import {ConvertorNumbersToCharacters} from "./utils/convertor-numbers-to-characters";

const app = express();
const port = 8000;

app.listen(port,() => {
    console.log("Server běží.");
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});



app.use('/v1/call', callRoutes);


