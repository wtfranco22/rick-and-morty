import { Link, useLocation } from 'react-router-dom';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from './../../redux/actions';
import { useEffect, useState } from 'react';
export function Card({ character, onClose }) {
   const location = useLocation();
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const favorites = useSelector((state) => state.myFavorites)
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [character.id, favorites]);
   const handleFavorite = () => {
      if (isFav) {
         dispatch(removeFav(character.id));
         setIsFav(false);
      } else {
         dispatch(addFav(character));
         setIsFav(true);
      }
   }
   const handleDelete = () => {
      onClose(character.id)
   }
   return (
      <>
         <div className={styles.card}>
            <Link to={'/Detail/' + character.id} className={styles.textLink}>
               <img className={styles.avatar} src={character.image} alt={character.name} />
               <div className={styles.details}>
                  <h3 className={styles.name}>{character.name.split(' ', 1)}</h3>
               </div>
            </Link>
            {location.pathname === '/Home' && <button className={styles.btn_close} onClick={handleDelete}>⨉</button>}
            {
               isFav ? (
                  <button className={styles.btn_star_on} onClick={handleFavorite}>★</button>
               ) : (
                  <button className={styles.btn_star_off} onClick={handleFavorite}>☆</button>
               )
            }
         </div>
      </>
   )
}
export default Card