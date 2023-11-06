import styles from './searchbar.module.css';
import logo from '../images/logo.jpg';
import SearchBar from './searchbar';

export default function Navbar({setMovieName,setTotalResults,setMovies}){
    return(
        <div className={styles.Navbar_Main_div}>
            <img src={logo} placeholder='logo' />
        <SearchBar setMovieName={setMovieName} setTotalResults={setTotalResults} setMovies={setMovies} />
        </div>
    )
}