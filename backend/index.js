const express = require('express');
const connection = require('./configs/db');
const cors = require('cors');
const movieRouter = require('./routes/moviesRoute');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors({origin:"*"}));
app.use("/movie",movieRouter);

app.get("/",(req,res)=>{
    res.send({msg:"Server is running"})
})

app.listen(process.env.port,async()=>{
    try{
        connection,
        console.log(`Server running at port ${process.env.port}`)
    }catch(err){
        console.log(err);
    }
})