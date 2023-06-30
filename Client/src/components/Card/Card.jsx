import { Link, useLocation } from 'react-router-dom';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from './../../redux/actions';
import { useEffect, useState } from 'react';
import { MdClose, MdStar, MdOutlineStarOutline } from 'react-icons/md';
export function Card({ character, onClose }) {
   const location = useLocation();
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const favorites = useSelector((state) => state.allFavs)
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [character.id, favorites]);

   const handleClickClose = () => onClose(character.id);
   const handleClickStar = () => {
      if (isFav) {
         dispatch(removeFav(character.id));
         setIsFav(false);
      } else {
         dispatch(addFav(character));
         setIsFav(true);
      }
   }
   return (
      <>
         <div className={`${styles.card} ${isFav ? styles.card_favorite : ''}`}>
            <Link to={'/Detail/' + character.id}>
               <img className={`${styles.avatar} ${isFav ? styles.avatar_fav : ''}`} src={character.image} alt={character.name} />
               <div className={`${styles.details} ${isFav?styles.details_fav:''}`}>
                  <h3 className={`${styles.name} ${isFav? styles.name_fav : ''}`}>{character.name.split(' ', 1)}</h3>
               </div>
            </Link>
            {location.pathname === '/Home' && <button className={styles.btn_close} name='btn_close' onClick={handleClickClose}><MdClose className={`${styles.icon} ${isFav ? styles.icon_fav : ''}`} /></button>}
            {
               isFav ? (
                  <button className={styles.btn_star} onClick={handleClickStar} name='btn_star'><MdStar className={`${styles.icon_fav} ${styles.star_animate}`} /></button>
               ) : (
                  <button className={styles.btn_star} onClick={handleClickStar} name='btn_star'><MdOutlineStarOutline className={`${styles.icon} ${styles.star_animate}`} /></button>
               )
            }
         </div>
      </>
   )
}
export default Card