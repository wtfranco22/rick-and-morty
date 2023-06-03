import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
export default function Nav({ onSearch, logout }) {
    const handleOnClick = (event) => {
        if (event.target.id === 'random') {
            let idRandom = Math.floor(Math.random() * 825 + 1)
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
                {
                    location.pathname === '/Home'
                    &&
                    <>
                        <div className={styles.random}>
                            <button onClick={handleOnClick} className={styles.btn} id='random'></button>
                        </div>
                        <div className={styles.searchBar}>
                            <SearchBar onSearch={onSearch} />
                        </div>
                    </>
                }
                <div className={styles.logout}>
                    <button onClick={handleOnClick} className={styles.btn} id='logout'>logout</button>
                </div>
            </div>
        </>
    )
}