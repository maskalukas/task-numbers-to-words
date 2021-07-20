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


const keypad = {
    2: "(a|b|c)",
    3: "(d|e|f)",
    4: "(g|h|i)",
    5: "(j|k|l)",
    6: "(m|n|o)",
    7: "(p|q|r|s)",
    8: "(t|u|v)",
    9: "(w|x|y|z)",
}

const d = new ConvertorNumbersToCharacters("22");
const res = d.convertWithRealWords();
console.log(res);

