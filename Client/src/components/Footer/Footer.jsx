import styles from './Footer.module.css';
import { GrLinkedin } from 'react-icons/gr';
import { BiLogoGmail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { VscGithubInverted } from 'react-icons/vsc';
import { MdOutlineCopyright } from 'react-icons/md';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.linksContainer}>
                <Link to="https://www.linkedin.com/in/wtfranco22/" target='_blank' className={styles.icons} >
                    <GrLinkedin />
                </Link>
                <Link to="mailto:wtfranco22@gmail.com" target='_blank' className={styles.icons}>
                    <BiLogoGmail />
                </Link>
                <Link to="https://www.github.com/wtfranco22/" target='_blank' className={styles.icons}>
                    <VscGithubInverted />
                </Link>
            </div>
            <div className={styles.content}>
                <MdOutlineCopyright className={styles.icon_cp} />
                2023 &nbsp;
                <Link to="" target='_blank' className={styles.link_cp}>
                    Soy Henry.
                </Link>
                &nbsp; Todos los derechos reservados.
            </div>
        </footer>
    )
}