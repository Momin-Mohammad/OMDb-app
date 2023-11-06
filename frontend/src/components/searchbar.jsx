import { useState } from "react";
import axios from "axios";
import Suggestions from "./suggestions";
import styles from './searchbar.module.css';

export default function SearchBar(){
    const[movies,setMovies] = useState([]);

    const suggestMovies=(e)=>{
        e.preventDefault();
        let movie_name = e.target.value;
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=94b792dc&s=${movie_name}`)
        .then(res=>{
            if(res.data.Response == 'True'){
                setMovies(res.data.Search)
            }
        })
        .catch(err=>console.log('Error:',err));
    }
    return(
        <div className={styles.SearchBar_Main_Div}>
            <form className={styles.SearchBar_form}>
                <input onChange={(e)=>suggestMovies(e)} id="movie_name" type="text" placeholder="Movie name" />
                <input type='submit' value="Search" />
            </form>
            {
                movies?<Suggestions movies={movies}/>:null
            }
        </div>
    )
}