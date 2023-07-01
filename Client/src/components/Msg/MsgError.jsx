import styles from './MsgError.module.css';
import { MdClose } from 'react-icons/md'
/**
 * Componente para mostrar un mensaje de error
 * @param {string} error - El mensaje de error que se mostrara
 * @param {function} closeMsg - Funcion para el cierre del mensaje
 * @returns {JSX.Element} elemento JSX que muestra el mensaje
 */
export default function MsgError({ error, closeMsg }) {
    const handleClick = () => closeMsg(); //manejo del evento click para el cierre
    return (
        < div className = { styles.msgContainer } >
            <div className={styles.msgContent}>
                <button className={styles.btn} onClick={handleClick}><MdClose className={styles.icon}/></button>
                <div className={styles.errorMessage}>{error}</div>
            </div>
        </div >
    );
}