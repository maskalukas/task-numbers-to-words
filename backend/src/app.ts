import express  from 'express';
import callRoutes from "./routes/call-routes"

const app = express();
const port = 8000;

app.listen(port,() => {
    console.log("Server běží.");
});


app.use('/v1/call', callRoutes);


