import { Link, useLocation } from 'react-router-dom';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from './../../redux/actions';
import { useEffect, useState } from 'react';
export function Card({ character, onClose }) {
   const location = useLocation();
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const favorites = useSelector((state)=>state.myFavorites)
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
   const handleDelete = ()=>{
      onClose(character.id)
   }
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
            { location.pathname === '/Home' &&<button className={styles.btn} onClick={handleDelete}>X</button>}
            {
               isFav ? (
                  <button className={styles.btn_fav} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={styles.btn_fav} onClick={handleFavorite}>🤍</button>
               )
            }
         </div>
      </>
   )
}
export default Card