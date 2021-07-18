import express  from 'express';

const app = express();
const port = 8000;

app.listen(port,() => {
    console.log("ddd.");


});

app.get('/', (req, res) => {
    res.send('Hello World!');

})
