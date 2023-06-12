import styles from './DetailPage.module.css';
import { Detail } from '../../components';
import useCharacter from "../../hooks/useCharacter";

export default function DetailPage() {
    const character = useCharacter();
    return (
        <>
            {!character.name ? (
                <>
                    <div className={styles.loading} >
                        <div className={styles.spinner}></div>
                        <div className={styles.loading_text}>Cargando...</div>
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