import styles from './Card.module.css';
export default function Card({ personaje, onClose }) {
   return (
      <>
         <div className={styles.card}>
            <img className={styles.avatar} src={personaje.image} alt={personaje.name} />
            <div className={styles.details}>
               <h3 className={styles.name}>{personaje.name}</h3>
               <p className={styles.bio}>
                  {'Status: ' + personaje.status} <br />
                  {'Species: ' + personaje.species} <br />
                  {'Gender: ' + personaje.gender} <br />
                  {'Origin: ' + personaje.origin.name} <br />
               </p>
               <button className={styles.btn} onClick={onClose}>X</button>
            </div>
         </div>
      </>
   )
}
