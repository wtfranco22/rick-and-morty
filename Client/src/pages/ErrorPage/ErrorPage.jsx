import styles from './ErrorPage.module.css'
import video from './../../assets/images/4.mp4'
export default function ErrorPage() {
    return (
        <div>
            <video className={styles.container} autoPlay loop muted playbackRate={0.5}>
                <source src={video} type="video/mp4" />
                Tu navegador no admite el elemento de video.
            </video>
            <div className={styles.description}>
                <p>Oh no! we got lost, let's go back home</p>
            </div>
        </div>
    )
}