import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MovieCard from "../components/movieCard";
import axios from "axios";
import styles from './Homepage.module.css';
import Pagination from "../components/pagination";

export default function Homepage(){
    const[movies,setMovies] = useState([]);
    const[movieName,setMovieName] = useState('all');
    const[totalResults,setTotalResults] = useState(0);
    const[page,setPage] = useState(1)

    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=94b792dc&s=${movieName}&page=${page}`)
        .then(res=>{
            setMovies(res.data.Search);
            console.log(res.data)
            setTotalResults(Number(res.data.totalResults))
        })
        .catch(err=>console.log(err))
    },[movieName,page])

    return(
        <div>
            <Navbar setMovieName={setMovieName} setTotalResults={setTotalResults} setMovies={setMovies} />
            <div className={styles.Homepage_Movies_Div}>
            {
                movies?.map((ele)=><MovieCard movie={ele} />)
            }
             </div>
             <div>
               {totalResults?<Pagination page={page} totalResults={totalResults} setPage={setPage}/>:null}
             </div>
        </div>
    )
}