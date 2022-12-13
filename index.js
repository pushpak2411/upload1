 import express  from 'express';
const app = express();
const port = 8000;

app.use('/', (req, res)=>{
    res.json({msg:`Hello From Server ${port}`});
})

app.listen(port, () => {
    console.log(`My Server Listning At ${port}`);
})