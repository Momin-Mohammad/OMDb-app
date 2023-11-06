const express = require('express');
const connection = require('./configs/db');
const cors = require('cors')
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors({origin:'*'}));

app.listen(process.env.port,async()=>{
    try{
        connection,
        console.log(`Server running at port ${process.env.port}`)
    }catch(err){
        console.log(err);
    }
})