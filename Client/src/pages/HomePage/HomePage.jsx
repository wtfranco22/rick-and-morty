import { useSelector } from "react-redux";
import { Cards } from "./../../components";

/**
 * Componente que representa la pagina principal de la aplicacion
 * @param {Array} characters - Array de personajes a mostrar en las tarjetas
 * @param {function} onClose - Función de cierre de la card
 * @returns {JSX.Element} Elemento JSX que muestra la página principal
 */
export default function HomePage({ characters, onClose }) {
      const { error } = useSelector((state) => state);
      return error ? null : <Cards characters={characters} onClose={onClose} />;
}
