import express from 'express';

const app = express();

app.get('/test', (req,res) => {
    return res.json("test check ok");
});

app.get('/')

app.listen(8080, ()=> console.log("listening on port http://localhost:8080"));