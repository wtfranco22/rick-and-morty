import { Cards } from './../../components';
import styles from './FavoritesPAge.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
// import { useState } from 'react';

export default function FavoritesPage({ onClose }) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.myFavorites)
    console.log(favorites)
    // const [aux, setAux] = useState(false);
    const handleOrder = (event) => {
        // setAux(true);
        dispatch(orderCards(event.target.value));
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.filter}>
                    <label className={styles.label}>
                        Filter by:
                        <select className={styles.select}>
                            <option onClick={handleFilter} value='all'>All</option>
                            <option onClick={handleFilter} value='Male'>Male</option>
                            <option onClick={handleFilter} value='Female'>Female</option>
                            <option onClick={handleFilter} value='Genderless'>Genderless</option>
                            <option onClick={handleFilter} value='unknown'>Unknown</option>
                        </select>
                    </label>
                </div>
                <div className={styles.order}>
                    <label className={styles.label}>
                        Sort by:
                        <select className={styles.select}>
                            <option onClick={handleOrder} value='A'>Ascending</option>
                            <option onClick={handleOrder} value='D'>Descending</option>
                        </select>
                    </label>
                </div>
            </div>
            <Cards characters={favorites} onClose={onClose} />
        </>
    )
};