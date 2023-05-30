import Card from './Card';

export default function Cards({characters}) {
   return <div>
      {characters.map((p) => {
         return <Card
            key={p.id}
            name={p.name}
            status={p.status}
            gender={p.gender}
            origin={p.origin.name}
            image={p.image}
         />
      })}
   </div>;
}
