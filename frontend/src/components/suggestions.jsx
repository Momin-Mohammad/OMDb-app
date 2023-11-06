import styles from './searchbar.module.css';

export default function Suggestions({movies}){
   
    return(
        <div style={{display:movies.length?"block":"none"}} className={styles.Suggestion_Main_div}>
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