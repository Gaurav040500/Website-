import express from 'express'
const app = express();
const PORT = 1234;

app.get('/',(req,res)=>{
    res.send("I am Live")
});

app.listen(PORT,(req,res)=>{
    console.log(`Listening On Port ${PORT}`);
})
