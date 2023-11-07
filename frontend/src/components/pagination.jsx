import { useState } from 'react';
import styles from '../styles/pagination.module.css';

export default function Pagination({page,setPage,totalResults}){
    const[scroll,setScroll] = useState(10)
    let arr = [];
    let buttons = Math.floor(totalResults/10);
    let remaining = totalResults%10;
    let allButtons = buttons+remaining;
    for(var a=1;a<allButtons; a++){
        arr[a] = a;
    }

    const style = {
        backgroundColor: "gray",
        color : "black"
    }

    const changePage=(p)=>{
        setPage(page + p);
        
    }

    return(
        <div className={styles.Pagination_Main_Div}>
            <button onClick={()=>changePage(-1)} disabled={page===1} >{page===1?"End":"Prev"}</button>
            <div id="buttonsDiv" className={styles.Pagination_Button_Div}>
            {
                arr?arr.map((ele)=> 
                <button style={ele==page?style:null} disabled={page===ele} onClick={()=>setPage(ele)}>{ele}</button>
                )
                :
                null
            }
            </div>
            <button onClick={()=>changePage(1)} disabled={page===arr[arr.length-1]}>{page===arr[arr.length-1]?"End":"Next"}</button>
        </div>
    )
}