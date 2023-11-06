import styles from './pagination.module.css';

export default function Pagination({page,setPage,totalResults}){
    let arr = [];
    let buttons = Math.floor(totalResults/10);
    let remaining = totalResults%10;
    let allButtons = buttons+remaining;
    for(var a=1;a<allButtons; a++){
        arr[a] = a;
    }

    const changePage=(p)=>{
        setPage(page + p);
    }

    return(
        <div className={styles.Pagination_Main_Div}>
            <button onClick={()=>changePage(-1)} disabled={page===1} >Prev</button>
            <div className={styles.Pagination_Button_Div}>
            {
                arr?arr.map((ele)=> 
                <button disabled={page===ele} onClick={()=>setPage(ele)}>{ele}</button>
                )
                :
                null
            }
            </div>
            <button onClick={()=>changePage(1)} disabled={page===arr[arr.length-1]}>Next</button>
        </div>
    )
}