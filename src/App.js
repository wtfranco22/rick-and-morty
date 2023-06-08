import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {HomePage, AboutPage, DetailPage, ErrorPage, LoginPage, FavoritesPage} from './pages'
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'franco@gmail.com';
   const PASSWORD = 'franco123';
   const dispatch =useDispatch();
   const onSearch = (id) => {
      setLoading(true);
      if (!characters.some((character) => character.id === Number(id))) {
         axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => {
               let character = response.data;
               setTimeout(() => {
                  if (character.error) {
                     alert(character.error);
                  } else {
                     setCharacters([...characters, character]);
                  }
                  setLoading(false);
               }, 1000);
            })
            .catch((error) => {
               alert('Error al buscar el personaje');
               setLoading(false);
            });
      } else {
         alert('already exists');
         setLoading(false);
      }
   }
   const onClose = (id) => {
      const updateCharacters = characters.filter((character) => character.id !== Number(id));
      setCharacters(updateCharacters);
      dispatch(removeFav(id));
   }
   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/Home');
      } else {
         alert('Datos incorrectos');
      }
   }
   const logout = () => {
      setAccess(false);
      navigate('/');
      setCharacters([]);
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
   return (
      <>
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            <Route path='/' element={<LoginPage login={login} />} />
            <Route path='/Home' element={<HomePage characters={characters} loading={loading} onClose={onClose} />} />
            <Route path='/Favorites' element={<FavoritesPage onClose={onClose}/>} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Detail/:id' element={<DetailPage />} />
            <Route path='*' element={<ErrorPage />} />
         </Routes>
      </>
   )
}

export default App;
