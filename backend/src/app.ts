import express  from 'express';
import callRoutes from "./routes/call-routes"

const app = express();
const port = 8000;

app.listen(port,() => {
    console.log("cus");
});


app.use('/v1/call', callRoutes)
