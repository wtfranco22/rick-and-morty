import Cards from './../Cards/Cards';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import styles from './Home.module.css';
export default function Home() {
    //componente padre envia datos, los hijos no acceden y no envian mas que el entregado
    //por eso, la funcionalidad de props con funcion que ejecutan lo siguiente
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const onSearch = (id) => {
        setLoading(true);
        if (characters.find((character) => character.id === Number(id)) === undefined) {
            //casting a Number, no lo tomaba estrictamente iguales
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then((res) => res.json())
                .then((character) => {
                    setTimeout(() => {
                        if (character.error) {
                            alert(character.error);
                        } else {
                            setCharacters([...characters, character]); //guardamos lo que esta + el nuevo dato
                        }
                        setLoading(false);
                    }, 1000);
                })
        } else {
            alert('already exists');
            setLoading(false);
        }
    }
    const onClose = (id) => {
        const updateCharacters = characters.filter((character) => character.id !== Number(id));
        setCharacters(updateCharacters);
    }
    return (
        <>
            <Nav onSearch={onSearch} />
            {loading && (
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <div className={styles.loading_text}>Cargando...</div>
                </div>
            )}
            <Cards characters={characters} onClose={onClose} />
            <Footer />
        </>
    )
}