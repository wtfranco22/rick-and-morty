import styles from './DetailPage.module.css';
import { Detail } from '../../components';
import useCharacter from "../../hooks/useCharacter";

/**
 * Componente que muestra el detalle del personaje seleccionado
 * @returns {JSX.Element} Elemento JSX que muestra los detalles del personaje
 */
export default function DetailPage() {
    const character = useCharacter();
    return (
        <>
            {!character.name ? (
                <>
                    <div className={styles.loading} >
                        <div className={styles.spinner}></div>
                        <div className={styles.loading_text}>Loading...</div>
                    </div>
                    <div className={styles.loadingContainer}>
                        <div className={styles.bgContainer}></div>
                        <div className={styles.progressBar}></div>
                    </div >
                </>
            ) :
                (<Detail character={character} />)
            }

        </>
    );
}