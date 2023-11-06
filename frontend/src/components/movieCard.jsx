import { useNavigate } from 'react-router-dom';
import styles from './movieCard.module.css';

export default function MovieCard({movie}){
    const navigate = useNavigate();
    return(
        <div onClick={()=>navigate('/heading')} className={styles.MovieCard_Div}>
            <h4>{movie.Title}</h4>
            <img src={movie.Poster} />
            <p>Type: {movie.Type}</p>
            <p>Release Year: {movie.Year}</p>
        </div>
    )
}