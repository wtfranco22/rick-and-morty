import { useDispatch, useSelector } from 'react-redux';
import { Cards } from './../../components/index';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

export default function FavoritesPage({ onClose }) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.myFavorites)
    console.log(favorites)
    const [aux, setAux] = useState(false);
    const handleOrder = (event) => {
        setAux(true);
        dispatch(orderCards(event.target.value));
    }
    const handleFilter = (event) => {
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
            <Cards characters={favorites} onClose={onClose} />
        </>
    )
};