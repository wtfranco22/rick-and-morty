import Card from '../Card/Card';
import useFetchCharacters from './../../data';
import styles from './Cards.module.css';

export default function Cards() {
   const characters = useFetchCharacters();
   return (
      <div className={styles.card_container}>
         {characters.map((personaje) => {
            return <Card
               key={personaje.id}
               personaje={personaje}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         })}
      </div>
   )
}