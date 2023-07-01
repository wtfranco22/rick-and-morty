import { useEffect, useState } from 'react';
import { validateForm } from '../../utils/Validate';
import styles from './LoginPage.module.css';
import { useSelector } from 'react-redux';
/**
 * Componente que muestra el formulario para iniciar sesion el usuario
 * @param {function} login - Funcion para iniciar sesion una vez validado los datos
 * @returns {JSX.Element} elemento JSX que muestra el mensaje
 */
export default function LoginPage({ login }) {
    const { loading, error } = useSelector((state) => state);
    const [userData, setUserData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' })
    const [send, setSend] = useState(false);
    useEffect(() => {
        //cada cambio en errors, verificamos para habilitar boton submit del fomulario
        setSend((Object.getOwnPropertyNames(errors).length) === 0);
    }, [errors])
    /**
     * Maneja el evento de cambio de entrada en los campos del formulario.
     * @param {Event} event - Evento de cambio de entrada.
     */
    const handleInput = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        setErrors(validateForm({ ...userData, [event.target.name]: event.target.value }))
    }
    /**
     * Maneja el evento de envío del formulario.
     * @param {Event} event - Evento de envío del formulario.
     */
    const handleSumbmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    if(loading || error) return null;
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
                <button disabled={!send} className={styles.btn} type='submit'>Login</button>
            </form>
        </div>
    )
}