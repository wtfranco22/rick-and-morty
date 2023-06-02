import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
export default function Nav({ onSearch }) {
    const location = useLocation();
    //llega una funcion la cual se envia al hijo para ejecutar esa funcion, pasa de largo
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
            </div>
        </>
    )
}