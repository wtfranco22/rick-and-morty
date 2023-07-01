import styles from './ErrorPage.module.css';
import video from './../../assets/images/4.mp4';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setErrorPage } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
/**
 * Componente que muestra un video cuando hubo error en lectura de pagina
 * @returns {JSX.Element} Elemento JSX que muestra la pagina de error
 */
export default function ErrorPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setErrorPage(true));
        return () => { dispatch(setErrorPage(false)) }
    }, [dispatch]);
    return (
        <div>
            <video className={styles.container} autoPlay loop muted playbackRate={0.5}>
                <source src={video} type="video/mp4" />
                Tu navegador no admite el elemento de video.
            </video>
            <div className={styles.description}>
                Oh no! we got lost, let's go &nbsp; &nbsp;<Link to='/Home' className={styles.link}><MdHome />&nbsp;back home</Link>
            </div>
        </div>
    )
}