const {Router} = require('express');
const movieRouter = Router();
const axios = require('axios');
require('dotenv').config();
const omdbURL = process.env.omdbURL;
const particular_movie = process.env.particular_movie;

movieRouter.get("/:name/:page",(req,res)=>{
    const{name,page} = req.params;
    axios({method:"GET",url:`${omdbURL}s=${name}&page=${page}`,headers:{'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Methods',
    'Access-Control-Allow-Origin' : '*'}})
    .then(data=>
        res.send({msg:"success",data:data.data})
    ).catch(err=>res.send({msg:err}))
});

movieRouter.get("/:id",(req,res)=>{
    const{id} = req.params;
    axios({method:"GET",url:`${particular_movie}i=${id}`,headers:{'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Methods',
    'Access-Control-Allow-Origin' : '*'}})
    .then(data=>
        res.send({msg:"success",data:data.data})
    ).catch(err=>res.send({msg:err}))
});

module.exports = movieRouter;