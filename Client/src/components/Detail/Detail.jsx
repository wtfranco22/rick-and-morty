import styles from './Detail.module.css';
export default function Detail({ character }) {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={character.image} alt={character.name} />
            </div>
            <div className={styles.description}>
                <h2>{character.name}</h2>
                <h3>
                    {'Status: ' + character.status} <br />
                    {'Species: ' + character.species} <br />
                    {'Gender: ' + character.gender} <br />
                    {'Origin: ' + character.origin?.name} <br />
                </h3>
            </div>
        </div>
    )
}