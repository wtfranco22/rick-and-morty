import { connect, useDispatch } from 'react-redux';
import styles from './Favorites.module.css';
import Card from './../Card/Card';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

export const Favorites = ({ favorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    const handleOrder = (event) =>{
        setAux(true);
        dispatch(orderCards(event.target.value));
    }
    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value));
    }
    return (
        <>
            <label>
                Ordenar de manera:
                <select>
                    <option onClick={handleOrder} value='A'>Ascendente</option>
                    <option onClick={handleOrder} value='D'>Descendente</option>
                </select>
            </label>
            <label>
                Filtrar segun:
                <select>
                    <option onClick={handleFilter} value='all'>all</option>
                    <option onClick={handleFilter} value='Male'>Male</option>
                    <option onClick={handleFilter} value='Female'>Female</option>
                    <option onClick={handleFilter} value='Genderless'>Genderless</option>
                    <option onClick={handleFilter} value='unkown'>unknown</option>
                </select>
            </label>
            <div className={styles.card_container}>
                {favorites?.map((character) => {
                    return <Card
                        key={character.id}
                        character={character}
                    />
                })}
            </div>
        </>
    )
}
export const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites
    }
}
export default connect(mapStateToProps)(Favorites)