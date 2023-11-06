import styles from './searchbar.module.css';
import logo from '../images/logo.jpg';
import {useNavigate, useParams} from 'react-router-dom';
import SearchBar from './searchbar';

export default function Navbar({setMovieName,setTotalResults,setMovies}){
    const navigate = useNavigate();
    const {id} = useParams()
    return(
        <div className={styles.Navbar_Main_div}>
            <img onClick={()=>navigate("/")} src={logo} placeholder='logo' />
       {id? null : <SearchBar setMovieName={setMovieName} setTotalResults={setTotalResults} setMovies={setMovies} />}
        </div>
    )
}