import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function MovieDetails(){
    const {id} = useParams();
    const[movieDetails,setMovieDetails] = useState({});
console.log(id)
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=94b792dc`)
        .then(res=>{
            console.log(res.data)
            setMovieDetails(res.data)})
        .catch(err=>console.log(err))
    },[])

    return(
        <div>
                <h2>{movieDetails.Title}</h2>
                <img src={movieDetails.Poster} />
                <p>Release Date: {movieDetails.Released}</p>
                <p>Type: {movieDetails.Type}</p>
                <p>Actors: {movieDetails.Actors}</p>
                <p>Country: {movieDetails.Country}</p>
                <p>Rated: {movieDetails.Rated}</p>
                <p>IMDb rating: {movieDetails.imdbRating}</p>
                <p>Writer: {movieDetails.Writer}</p>
        </div>
    )
}