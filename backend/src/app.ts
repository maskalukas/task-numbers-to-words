import express  from 'express';
import callRoutes from "./routes/call-routes"
import {ConvertorNumbersToCharacters} from "./utils/convertor-numbers-to-characters";
import {  readFileSync } from 'fs';

const app = express();
const port = 8000;

app.listen(port,() => {
    console.log("The server is running.");
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


app.use('/v1/call', callRoutes);



const d = new ConvertorNumbersToCharacters("22", true);
const res = d.convertWithRealWords();
console.log(res);

