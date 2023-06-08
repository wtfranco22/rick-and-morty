import { Link, useLocation } from 'react-router-dom';
import styles from './Card.module.css';
import { connect } from 'react-redux';
import { addFav, removeFav } from './../../redux/actions';
import { useEffect, useState } from 'react';
export function Card({ character, onClose, addFav, removeFav, favorites }) {
   const location = useLocation();
   const [isFav, setIsFav] = useState(false);
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [character.id, favorites]);
   const handleFavorite = () => {
      if (isFav) {
         removeFav(character);
         setIsFav(false);
      } else {
         addFav(character);
         setIsFav(true);
      }
   }
   const handleDelete = ()=>{
      handleFavorite();
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
export function mapDispatchToProps(dispatch) {
   return {
      addFav: character => dispatch(addFav(character)),
      removeFav: character => dispatch(removeFav(character.id))
   }
}
export function mapStateToProps(state) {
   return {
      favorites: state.myFavorites
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)

