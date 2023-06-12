import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { HomePage, AboutPage, DetailPage, ErrorPage, LoginPage, FavoritesPage } from './pages'
import { Nav } from './components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, removeCharacter, cleanCharacters} from './redux/actions';

function App() {
   const characters = useSelector((state)=>state.allCharacters);
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'franco@gmail.com';
   const PASSWORD = 'franco123';
   const dispatch = useDispatch();
   const onSearch = (id) => {
      if (!characters.some((character) => character.id === Number(id))) {
         dispatch(addCharacter(id));
      } else {
         alert('already exists');
      }
   }
   const onClose = (id) => {
      dispatch(removeCharacter(id));
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
      dispatch(cleanCharacters());
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
   return (
      <>
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            <Route path='/' element={<LoginPage login={login} />} />
            <Route path='/Home' element={<HomePage characters={characters} onClose={onClose} />} />
            <Route path='/Favorites' element={<FavoritesPage onClose={onClose} />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Detail/:id' element={<DetailPage />} />
            <Route path='*' element={<ErrorPage />} />
         </Routes>
      </>
   )
}
export default App;