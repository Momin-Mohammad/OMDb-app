import { useState } from "react";
import axios from "axios";
import Suggestions from "./suggestions";
import styles from './searchbar.module.css';

export default function SearchBar({setMovieName,setTotalResults,setMovies}){
    const[suggestions,setSuggestions] = useState([]);
    const[name,setName] = useState('');
    const[results,setResults] = useState(0);
    const[displaySuggestion,setDisplaySuggestion] = useState(false);

    const suggestMovies=(e)=>{
        e.preventDefault();
        setName(e.target.value);
        let movie_name = e.target.value;
        if(!movie_name){
            setDisplaySuggestion(false);
            return
        }
        axios.get(`https://omdb-movies-data.onrender.com/movie/${movie_name}/1`)
        .then(res=>{
            console.log(res.data)
            if(res.data.data.Response == 'True'){
                setSuggestions(res.data.data.Search);
                setDisplaySuggestion(true);
                setResults(Number(res.data.data.totalResults))
            }
        })
        .catch(err=>console.log('Error:',err));
    }

    const showMovies=(e)=>{
        e.preventDefault();
        if(!name || !suggestions){
            return;
        }
        setMovieName(name);
        setTotalResults(results);
        setDisplaySuggestion(false);
        setMovies(suggestions);
    }

    return(
        <div onSubmit={showMovies} className={styles.SearchBar_Main_Div}>
            <form className={styles.SearchBar_form}>
                <input onChange={(e)=>suggestMovies(e)} id="movie_name" type="text" placeholder="Movie name" />
                <input type='submit' value="Search" />
            </form>
            {
                suggestions?<Suggestions showSuggestion={displaySuggestion} movies={suggestions}/>:null
            }
        </div>
    )
}