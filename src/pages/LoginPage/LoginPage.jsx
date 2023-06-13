import { useEffect, useState } from 'react';
import validate from '../../utils/Validate';
import styles from './LoginPage.module.css';
export default function LoginPage({ login }) {
    const [userData, setUserData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' })
    const [send, setSend] = useState(false);
    useEffect(() => {
        //cada cambio en errors, verificamos para habilitar btn submit del fomulario
        setSend((Object.getOwnPropertyNames(errors).length) === 0);
    }, [errors])
    const handleInput = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        setErrors(validate({ ...userData, [event.target.name]: event.target.value }))
    }
    const handleSumbmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSumbmit} className={styles.form} autoComplete='off'>
                <p className={styles.title}>Login</p>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor='email'>Email</label>
                    <input className={styles.input} onInput={handleInput} type='email' name='email' id='email' value={userData.email} placeholder='Escriba su email' />
                    <p className={styles.errors}>{errors.email}</p>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor='password'>Password</label>
                    <input className={styles.input} onInput={handleInput} type='password' name='password' id='email' value={userData.password} placeholder='Escriba su contraseña' />
                    <p className={styles.errors}>{errors.password}</p>
                </div>
                <button disabled={!send} className={styles.btn} type='submit'>Submit</button>
            </form>
        </div>
    )
}