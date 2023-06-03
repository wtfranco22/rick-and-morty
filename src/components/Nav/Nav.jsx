import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
export default function Nav({ onSearch, logout }) {
    const handleOnClick = ()=>{
        logout();
    }
    const location = useLocation();
    return (
        <>
            <div className={styles.container}>
                <Link to={'/Home'} className={styles.title}>
                    Home
                </Link>
                <Link to={'/About'} className={styles.title}>
                    About
                </Link>
                <div className={styles.searchBar}>
                    {location.pathname === '/Home' && <SearchBar onSearch={onSearch} />}
                </div>
                <div className={styles.logout}>
                    <button onClick={handleOnClick} className={styles.btn}>logout</button>
                </div>
            </div>
        </>
    )
}