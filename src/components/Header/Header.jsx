import SearchBar from './SearchBar';
import styles from './Header.module.css';
export default function Header() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Rick & Morty</h1>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
    )
}