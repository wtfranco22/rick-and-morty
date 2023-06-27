import { useSelector } from "react-redux";
import { Cards } from "./../../components";
import styles from "./HomePage.module.css";

/**
 * Componente que representa la pagina principal de la aplicacion
 * @param {Array} characters - Array de personajes a mostrar en las tarjetas
 * @param {function} onClose - Función de cierre de la card
 * @returns {JSX.Element} Elemento JSX que muestra la página principal
 */
export default function HomePage({ characters, onClose }) {
      const loading = useSelector((state)=>state.loading);
      return (
            <>
                  {loading && (
                        <div className={styles.loading}>
                              <div className={styles.spinner}></div>
                              <div className={styles.loading_text}>Loading . . .</div>
                        </div>
                  )}
                  <Cards characters={characters} onClose={onClose} />
            </>
      );
}
