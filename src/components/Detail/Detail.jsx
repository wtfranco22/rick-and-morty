export default function Detail({character}) {
    return (
        <>
            <img src={character.image} alt={character.name} />
            <div >
                <h3 >{character.name}</h3>
                <p >
                    {'Status: ' + character.status} <br />
                    {'Species: ' + character.species} <br />
                    {'Gender: ' + character.gender} <br />
                    {'Origin: ' + character.origin?.name} <br />
                </p>
            </div>
        </>
    )
}