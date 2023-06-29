import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from './../';
import styles from './Nav.module.css';
import { useSelector } from 'react-redux';
import { validateSearch } from '../../utils/Validate';
import { AiFillStar } from 'react-icons/ai';
import { MdHome, MdLogout } from 'react-icons/md';

/**
 * Componente que muestra la barra de navegacion del sitio web
 * @param {function} onSearch - Funcion para buscar un character por id
 * @param {function} logout - Funcion que permite cerrar sesion al usuario
 * @returns {JSX.Element} elemento JSX que muestra el mensaje
 */
export default function Nav({ onSearch, logout }) {
    const characters = useSelector((state) => state.allCharacters)
    const location = useLocation();
    const handleClick = (event) => {
        //handleClick detecta todos los clicks
        if (event.target.id === 'random') {
            let error = 'error';
            let idRandom;
            do {
                // buscar un id siempre hasta que no retorne error
                idRandom = Math.floor(Math.random() * 826 + 1);
                error = validateSearch(idRandom + '', characters);
            } while (error);
            onSearch(idRandom);
        } else {
            logout();
        }
    }
    return (
        <>
            <div className={styles.container}>
                <Link to={'/Home'} className={styles.title}>
                    <MdHome className={styles.iconHome} />
                </Link>
                <Link to={'/About'} className={styles.title}>
                    About
                </Link>
                <Link to={'/Favorites'} className={styles.title}>
                    Favs <AiFillStar className={styles.iconStar} />
                </Link>
                {
                    location.pathname === '/Home' &&
                    <>
                        <div className={styles.random}>
                            <button onClick={handleClick} className={styles.btn} id='random'></button>
                        </div>
                        <div className={styles.searchBar}>
                            <SearchBar onSearch={onSearch} />
                        </div>
                    </>
                }
                <MdLogout onClick={handleClick} className={styles.iconLogout} />
            </div>
        </>
    )
}