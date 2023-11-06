import { useNavigate } from 'react-router-dom';
import styles from './searchbar.module.css';

export default function Suggestions({showSuggestion,movies}){
   const navigate = useNavigate();

    return(
        <div style={{display:showSuggestion?"block":"none"}} className={styles.Suggestion_Main_div}>
            {
                movies.map((ele)=>
                <div className={styles.Suggestion_Movie}>
                    <img src={ele.Poster} />
                    <h4 style={{cursor:"pointer"}} onClick={()=>navigate(`/${ele.imdbID}`)}>{ele.Title}</h4>
                </div>
                )
            }
        </div>
    )
}