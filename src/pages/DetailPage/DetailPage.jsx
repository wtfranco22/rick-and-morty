import styles from './DetailPage.module.css';
import { Detail } from '../../components/index';
import useCharacter from "../../hooks/useCharacters";

export default function DetailPage() {
    const character = useCharacter();
    return (
        <>
            {!character.name ? (
                <div className={styles.loading} >
                    <div className={styles.spinner}></div>
                    <div className={styles.loading_text}>Cargando...</div>
                </div>
            ) : (<Detail character={character} />)}
            
        </>
    );
}