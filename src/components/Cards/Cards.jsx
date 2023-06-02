import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({ characters, onClose, loading }) {
   return (
      <>
         <div className={styles.card_container}>
            {characters?.map((character) => {
               return <Card
                  key={character.id}
                  character={character}
                  onClose={onClose}
               />
            })}
         </div>
      </>
   )
}