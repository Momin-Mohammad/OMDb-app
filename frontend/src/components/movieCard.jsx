import { useNavigate } from 'react-router-dom';
import styles from '../styles/movieCard.module.css';

export default function MovieCard({movie}){
    const navigate = useNavigate();
    return(
        <div onClick={()=>navigate(`/${movie.imdbID}`)} className={styles.MovieCard_Div}>
            <h4>{movie.Title}</h4>
            <img src={movie.Poster} />
            <p>Type: {movie.Type}</p>
            <p>Release Year: {movie.Year}</p>
        </div>
    )
}