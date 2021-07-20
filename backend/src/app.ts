import express  from 'express';
import callRoutes from "./routes/call-routes"


const app = express();
const port = 8000;

app.listen(port,() => {
    console.log("The server is running.");
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// routes
app.use('/v1/call', callRoutes);



