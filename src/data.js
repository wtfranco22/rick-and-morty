// export const Rick = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

// export default [
//    {
//       id: 1,
//       name: 'Rick Sanchez',
//       status: 'Alive',
//       species: 'Human',
//       gender: 'Male',
//       origin: {
//          name: 'Earth (C-137)',
//          url: 'https://rickandmortyapi.com/api/location/1',
//       },
//       image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//    },
//    {
//       id: 2,
//       name: 'Morty Smith',
//       status: 'Alive',
//       species: 'Human',
//       gender: 'Male',
//       origin: {
//          name: 'unknown',
//          url: '',
//       },
//       image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//    },
//    {
//       id: 3,
//       name: 'Summer Smith',
//       status: 'Alive',
//       species: 'Human',
//       gender: 'Female',
//       origin: {
//          name: 'Earth (Replacement Dimension)',
//          url: 'https://rickandmortyapi.com/api/location/20',
//       },
//       image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//    },
//    {
//       id: 4,
//       name: 'Beth Smith',
//       status: 'Alive',
//       species: 'Human',
//       gender: 'Female',
//       origin: {
//          name: 'Earth (Replacement Dimension)',
//          url: 'https://rickandmortyapi.com/api/location/20',
//       },
//       image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//    },
//    {
//       id: 5,
//       name: 'Jerry Smith',
//       status: 'Alive',
//       species: 'Human',
//       gender: 'Male',
//       origin: {
//          name: 'Earth (Replacement Dimension)',
//          url: 'https://rickandmortyapi.com/api/location/20',
//       },
//       image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
//    },
// ];
import { useState, useEffect } from 'react';

function useFetchCharacters() {
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setCharacters(data.results);
         } catch (error) {
            console.log(error);
         }
      };

      fetchData();
   }, []);

   return characters;
}

export default useFetchCharacters;
