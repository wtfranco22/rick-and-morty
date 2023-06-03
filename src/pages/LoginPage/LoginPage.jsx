import Form from './../../components/Login/Form';
import styles from './LoginPage.module.css';
export default function LoginPage({ login }) {
    return (
        <div className={styles.container}>
            <Form login={login} />
        </div>
    )
}