import { useState } from "react";
import axios from "axios";
import Suggestions from "./suggestions";
import styles from './searchbar.module.css';

export default function SearchBar({setMovies}){
    const[suggestions,setSuggestions] = useState([]);
    const[name,setName] = useState('');
    const[displaySuggestion,setDisplaySuggestion] = useState(false);

    const suggestMovies=(e)=>{
        e.preventDefault();
        setName(e.target.value);
        let movie_name = e.target.value;
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=94b792dc&s=${movie_name}`)
        .then(res=>{
            if(res.data.Response == 'True'){
                setSuggestions(res.data.Search);
                setDisplaySuggestion(true);
            }
        })
        .catch(err=>console.log('Error:',err));
    }

    const showMovies=(e)=>{
        e.preventDefault();
        if(!name || !suggestions){
            return;
        }
        setDisplaySuggestion(false)
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