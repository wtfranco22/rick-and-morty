import styles from './SearchBar.module.css'
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState(0);
   const changeId = function (event) {
      // del evento, obtenemos el id
      setId(event.target.value);
   }
   return (
      <div>
         <input className={styles.input} type='search' onChange={changeId} />
         <button className={styles.btn} onClick={() => onSearch(id)}>Add</button>
         {/* no disparamos la funcion de manera inmediata*/}
      </div>
   );
}