import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './MovieDetails.module.css';
import Navbar from "../components/navbar";

export default function MovieDetails(){
    const {id} = useParams();
    const[movieDetails,setMovieDetails] = useState({});
console.log(id)
    useEffect(()=>{
        axios.get(`https://omdb-movies-data.onrender.com/movie/${id}`)
        .then(res=>{
            console.log(res.data)
            setMovieDetails(res.data.data)})
        .catch(err=>console.log(err))
    },[])

    return(
        <div>
              <Navbar />
        <div className={styles.MovieDetails_Main_Div}>
             <div><img src={movieDetails.Poster} /></div>

                <div><h2>{movieDetails.Title}</h2>
                <p><b>Release Date:</b> {movieDetails.Released}</p>
                <p><b>Type:</b> {movieDetails.Type}</p>
                <p><b>Actors:</b> {movieDetails.Actors}</p>
                <p><b>Country:</b> {movieDetails.Country}</p>
                <p><b>Rated:</b> {movieDetails.Rated}</p>
                <p><b>IMDb rating:</b> {movieDetails.imdbRating}</p>
                <p><b>Writer:</b> {movieDetails.Writer}</p>
                </div>
        </div>
        </div>
    )
}