import { useSelector } from 'react-redux';
import styles from './SearchBar.module.css'
import { useState } from "react";
import { validateSearch } from '../../utils/Validate';
import MsgError from '../Msg/MsgError';

export default function SearchBar({ onSearch }) {
   const characters = useSelector((state) => state.allCharacters);
   const [id, setId] = useState('');
   const [error, setError] = useState('');
   const changeId = function (event) {
      // del evento, obtenemos el id
      setId(event.target.value);
      setError('');
   }
   const searchCharacter = () => {
      let value = validateSearch(id, characters);
      setError(value);
      if(!value){
         onSearch(id);
         setId('');
         setError('');
      }
   }
   const closeMsg = () => {
      setError('')
      setId('')
   }
   return (
      <>
         <div className={styles.container}>
            <input className={styles.input} type='search' value={id} onChange={changeId} />
            <button className={styles.btn} onClick={searchCharacter}>Add</button>
         </div>
         {error && <MsgError error={error} closeMsg={closeMsg} />}
      </>
   );
}