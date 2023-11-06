import styles from './searchbar.module.css';

export default function Suggestions({showSuggestion,movies}){
   
    return(
        <div style={{display:showSuggestion?"block":"none"}} className={styles.Suggestion_Main_div}>
            {
                movies.map((ele)=>
                <div>
                    <h4>{ele.Title}</h4>
                </div>
                )
            }
        </div>
    )
}