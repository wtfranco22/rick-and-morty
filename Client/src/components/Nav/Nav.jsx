import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from './../';
import styles from './Nav.module.css';
import { useSelector } from 'react-redux';
import { validateSearch } from '../../utils/Validate';
export default function Nav({ onSearch, logout }) {
    const characters = useSelector((state)=>state.allCharacters)
    const handleClick = (event) => {
        if (event.target.id === 'random') {
            let error = 'error';
            let idRandom;
            do{
                idRandom = Math.floor(Math.random() * 826 + 1);
                error = validateSearch(idRandom+'',characters);
            }while(error);
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