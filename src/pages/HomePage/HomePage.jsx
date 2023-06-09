import { Cards } from "./../../components";
import styles from "./HomePage.module.css";

export default function HomePage({ characters, onClose, loading }) {
      return (
            <>
                  {loading && (
                        <div className={styles.loading}>
                              <div className={styles.spinner}></div>
                              <div className={styles.loading_text}>Cargando...</div>
                        </div>
                  )}
                  <Cards characters={characters} onClose={onClose} />
            </>
      );
}
