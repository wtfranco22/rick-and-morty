import styles from './MsgError.module.css';

export default function MsgError({ error, closeMsg }) {
    const handleClick = () => closeMsg();
    return (
        <div className={styles.msgContainer}>
            <div className={styles.msgContent}>
                <button className={styles.closeButton} onClick={handleClick}>⨉</button>
                <div className={styles.errorMessage}>{error}</div>
            </div>
        </div>
    );
}