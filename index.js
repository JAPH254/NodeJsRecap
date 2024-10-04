import express from 'express';
const app = express();
const port = 5000;
const currentTime = new Date().toLocaleTimeString();
app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(port, () => {
    console.log(`${currentTime} Server is running on port ${port}`);
    });