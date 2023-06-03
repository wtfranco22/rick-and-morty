import { useState } from 'react';
import validate from '../../utils/Validate';
import styles from './Form.module.css';
export default function Form() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })
    const [send, setSend] = useState(false);
    const handleOnInput = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        setErrors(
            validate({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
        setSend((Object.getOwnPropertyNames(errors).length) ===0);
    }
    const handleOnSumbmit = (event) => {
        event.preventDefault();
        console.log(errors);
    }
    return (
        <form onSubmit={handleOnSumbmit} className={styles.form} autoComplete='off'>
            <p className={styles.title}>Login</p>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor='email'>Email</label>
                <input className={styles.input} onInput={handleOnInput} type='email' name='email' id='email' value={userData.email} placeholder='Escriba su email' />
                <p className={styles.errors}>{errors.email}</p>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor='password'>Password</label>
                <input className={styles.input} onInput={handleOnInput} type='password' name='password' id='email' value={userData.password} placeholder='Escriba su contraseña' />
                <p className={styles.errors}>{errors.password}</p>
            </div>
            <button disabled={!send} className={styles.btn} type='submit'>Submit</button>
        </form>
    )
}