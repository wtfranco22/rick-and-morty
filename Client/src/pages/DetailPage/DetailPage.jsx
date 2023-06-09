import styles from './DetailPage.module.css';
import { Detail } from '../../components';
import useCharacter from "../../hooks/useCharacter";
import { useSelector } from 'react-redux';

/**
 * Componente que muestra el detalle del personaje seleccionado
 * @returns {JSX.Element} Elemento JSX que muestra los detalles del personaje
 */
export default function DetailPage() {
    const character = useCharacter();
    const { loading } = useSelector((state) => state);
    return (
        <>
            {loading ? (
                <div className={styles.loadingContainer}>
                    <div className={styles.bgContainer}></div>
                    <div className={styles.progressBar}></div>
                </div >
            )
                : character.name && (<Detail character={character} />)
            }

        </>
    );
}