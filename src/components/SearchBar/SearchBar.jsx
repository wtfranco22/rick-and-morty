import styles from './SearchBar.module.css'
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');
   const changeId = function (event) {
      // del evento, obtenemos el id
      setId(event.target.value);
   }
   const searchCharacter=()=>{
      onSearch(id);
      setId('');
   }
   return (
      <div className={styles.container}>
         <input className={styles.input} type='search' value={id} onChange={changeId} />
         <button className={styles.btn} onClick={searchCharacter}>Add</button>
         {/* no disparamos la funcion de manera inmediata*/}
      </div>
   );
}