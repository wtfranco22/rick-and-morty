import { Link, useLocation } from 'react-router-dom';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from './../../redux/actions';
import { useEffect, useState } from 'react';
export function Card({ character, onClose }) {
   const location = useLocation();
   const [isFav, setIsFav] = useState(false);
   const [animate, setAnimate] = useState(false);
   const dispatch = useDispatch();
   const favorites = useSelector((state) => state.myFavorites)
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [character.id, favorites]);

   const handleClick = (event) => {
      // capturamos el evento click y realizamos una accion
      if (event.target.name === 'btn_close') {
         // borramos al character del estado global
         onClose(character.id);
      } else {
         if (isFav) {
            // cancelamos animacion y quitamos de fav
            setAnimate(false)
            dispatch(removeFav(character.id));
            setIsFav(false);
         } else {
            //agregamos animacion despues de agregar un nuevo character fav
            dispatch(addFav(character));
            setAnimate(true)
            setIsFav(true);
         }
      }
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
            {location.pathname === '/Home' && <button className={styles.btn_close} name='btn_close' onClick={handleClick}>⨉</button>}
            {
               isFav ? (
                  <button className={`${styles.btn_star_on} ${animate ? styles.btn_star : ''}`} name='btn_star_on' onClick={handleClick}>★</button>
               ) : (
                  <button className={styles.btn_star_off} name='btn_star_off' onClick={handleClick}>☆</button>
               )
            }
         </div>
      </>
   )
}
export default Card