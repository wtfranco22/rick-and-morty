import { connect } from 'react-redux';
import styles from './Favorites.module.css';
import Card from './../Card/Card';
export const Favorites = ({ favorites }) => {
    return (
        <div className={styles.card_container}>
            {favorites?.map((character) => {
               return <Card
                  key={character.id}
                  character={character}
               />
            })}
         </div>
    )
}
export const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites
    }
}
export default connect(mapStateToProps)(Favorites)