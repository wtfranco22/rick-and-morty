import styles from './Loading.module.css';

export default function Loading() {
    return (<div className={styles.loading}>
        <div className={styles.spinner}></div>
        <div className={styles.loading_text}>L o a d i n g . . .</div>
    </div>);
}