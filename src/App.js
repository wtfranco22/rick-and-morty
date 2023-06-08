import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import DetailPage from './pages/DetailPage/DetailPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import styles from './App.module.css';
import LoginPage from './pages/LoginPage/LoginPage';
import axios from 'axios';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'franco@gmail.com';
   const PASSWORD = 'franco123';
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
   }
   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/Home');
      }else{
         alert('Datos incorrectos');
      }
   }
   const logout = () => {
      setAccess(false);
      navigate('/');
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
   return (
      <>
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
         <div className={styles.container}>
            <Routes>
               <Route path='/' element={<LoginPage login={login} />} />
               <Route path='/Home' element={<HomePage characters={characters} loading={loading} onClose={onClose} />} />
               <Route path='/Favorites' element={<Favorites />} />
               <Route path='/About' element={<AboutPage />} />
               <Route path='/Detail/:id' element={<DetailPage />} />
               <Route path='*' element={<ErrorPage />} />
            </Routes>
         </div>
      </>
   )
}

export default App;
