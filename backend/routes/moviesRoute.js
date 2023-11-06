const {Router} = require('express');
const movieRouter = Router();
const axios = require('axios');
require('dotenv').config();
const omdbURL = process.env.omdbURL;
const particular_movie = process.env.particular_movie;

movieRouter.get("/:name/:page",(req,res)=>{
    const{name,page} = req.params;
    axios.get(`${omdbURL}s=${name}&page=${page}`)
    .then(data=>
        res.send({msg:"success",data:data.data})
    ).catch(err=>res.send({msg:err}))
});

movieRouter.get("/:id",(req,res)=>{
    const{id} = req.params;
    axios.get(`${particular_movie}i=${id}`)
    .then(data=>
        res.send({msg:"success",data:data.data})
    ).catch(err=>res.send({msg:err}))
});

module.exports = movieRouter;