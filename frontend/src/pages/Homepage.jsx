import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MovieCard from "../components/movieCard";
import axios from "axios";
import styles from './Homepage.module.css';

export default function Homepage(){
    const[movies,setMovies] = useState([]);

    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=94b792dc&s=all&page=1`)
        .then(res=>setMovies(res.data.Search))
        .catch(err=>console.log(err))
    },[])

    return(
        <div>
            <Navbar setMovies={setMovies} />
            <div className={styles.Homepage_Movies_Div}>
            {
                movies.map((ele)=><MovieCard movie={ele} />)
            }
             </div>
        </div>
    )
}