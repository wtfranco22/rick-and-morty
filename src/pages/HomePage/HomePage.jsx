import Home from './../../components/Home/Home';
import styles from './HomePage.module.css';

export default function HomePage({ characters, onClose, loading }) {
      return (
            <>
                  {loading && (
                        <div className={styles.loading}>
                              <div className={styles.spinner}></div>
                              <div className={styles.loading_text}>Cargando...</div>
                        </div>
                  )}
                  <Home characters={characters} onClose={onClose} />
            </>
      );
}