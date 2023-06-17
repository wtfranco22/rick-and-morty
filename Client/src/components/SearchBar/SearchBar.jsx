import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBar.module.css'
import { useState } from "react";
import { validateSearch } from '../../utils/Validate';
import { MsgError } from '../';
import { setError } from '../../redux/actions';

/**
 * Componente de barra de busqueda que permite buscar personajes
 * @param {function} onSearch - Funcion que se ejecuta al realizar una busqueda exitosa
 * @returns {JSX.Element} Elemento JSX que muestra la barra de busqueda
 */
export default function SearchBar({ onSearch }) {
   const characters = useSelector((state) => state.allCharacters);
   const error = useSelector((state) => state.error);
   const dispatch = useDispatch();
   const [id, setId] = useState('');
   /**
    * Maneja el cambio en el campo de busqueda
    * @param {Event} event - Objeto de evento del cambio
    */
   const changeId = function (event) {
      // del evento, obtenemos el id
      setId(event.target.value);
   }
   /**
    * activa la busqueda del personaje
    * verificando si es valido el id ingresado
    */
   const searchCharacter = () => {
      let value = validateSearch(id, characters);
      if (!value) {
         onSearch(id);
         setId('');
      }else{
         dispatch(setError(value))
      }
   }
   /**
    * funcion encargada de cerrar el mensaje de error en caso de existir
    */
   const closeMsg = () => {
      dispatch(setError(null))
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