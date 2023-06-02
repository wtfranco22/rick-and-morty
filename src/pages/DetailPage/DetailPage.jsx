import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './DetailPage.module.css';
import Detail from './../../components/Detail/Detail';

export default function DetailPage() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [character, setCharacter] = useState({});
    useEffect(() => {
        setLoading(true);
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setTimeout(() => {
                        setCharacter(data);
                        setLoading(false);
                    },1000)
                } else {
                    alert('No hay personajes con ese ID');
                    setLoading(false);
                }
            });
        return setCharacter({})
    }, [id]);
    return (
        <>
            {loading ? (
                <div className={styles.loading} >
                    <div className={styles.spinner}></div>
                    <div className={styles.loading_text}>Cargando...</div>
                </div>
            ) : (<Detail character={character} />)}
        </>
    );
}