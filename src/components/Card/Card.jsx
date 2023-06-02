import { Link } from 'react-router-dom';
import styles from './Card.module.css';
export default function Card({ character, onClose }) {
   return (
      <>
         <div className={styles.card}>
            <img className={styles.avatar} src={character.image} alt={character.name} />
            <Link to={'/Detail/' + character.id} className={styles.textLink}>
               <div className={styles.details}>
                  <h3 className={styles.name}>{character.name}</h3>
                  <p className={styles.bio}>
                     {'Status: ' + character.status} <br />
                     {'Species: ' + character.species} <br />
                     {'Gender: ' + character.gender} <br />
                     {'Origin: ' + character.origin.name} <br />
                  </p>
               </div>
            </Link>
            <button className={styles.btn} onClick={() => { onClose(character.id) }}>X</button>
         </div>
      </>
   )
}
