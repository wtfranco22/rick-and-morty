import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from './../index';
import styles from './Nav.module.css';
export default function Nav({ onSearch, logout }) {
    const handleClick = (event) => {
        if (event.target.id === 'random') {
            let idRandom = Math.floor(Math.random() * 5 + 1)
            onSearch(idRandom);
        } else {
            logout();
        }
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
                <Link to={'/Favorites'} className={styles.title}>
                    Favs
                </Link>
                {
                    location.pathname === '/Home'
                    &&
                    <>
                        <div className={styles.random}>
                            <button onClick={handleClick} className={styles.btn} id='random'></button>
                        </div>
                        <div className={styles.searchBar}>
                            <SearchBar onSearch={onSearch} />
                        </div>
                    </>
                }
                <div className={styles.logout}>
                    <button onClick={handleClick} className={styles.btn} id='logout'>logout</button>
                </div>
            </div>
        </>
    )
}