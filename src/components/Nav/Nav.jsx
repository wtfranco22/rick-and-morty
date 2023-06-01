import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
export default function Nav({ onSearch }) {
    //llega una funcion la cual se envia al hijo para ejecutar esa funcion, pasa de largo
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Rick & Morty</h1>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}