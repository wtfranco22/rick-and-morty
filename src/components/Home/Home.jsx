import Cards from './../Cards/Cards';
import styles from './Home.module.css';

export default function Home({ characters, onClose }) {
    return (
        <div className={styles.container}>
            <Cards characters={characters} onClose={onClose} />
        </div>
    )
}