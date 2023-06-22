import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { HomePage, AboutPage, DetailPage, ErrorPage, LoginPage, FavoritesPage } from './pages'
import { Nav, MsgError } from './components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, loginUser, logoutUser, reloadAccess, removeCharacter, setError } from './redux/actions';

function App() {
   const { allCharacters: characters, error, access } = useSelector((state) => state);
   const location = useLocation(); //obtengo nombre de la ruta donde estoy
   const navigate = useNavigate(); //utilizado para redireccionar
   const dispatch = useDispatch(); //utilizado para despachar acciones al estado global
   const onSearch = addCharacter;
   const onClose = removeCharacter; // id proviene de Home/FavoritesPage para eliminar character, despacha accion a redux
   const login = (user) => {
      dispatch(loginUser(user))
         .then(() => navigate('/Home'))
         .catch(() => navigate('/'))
   };
   const logout = () => dispatch(logoutUser());
   useEffect(() => {
      const token = localStorage.getItem('token');
      if (token && !access) dispatch(reloadAccess());
      if (!access && localStorage.getItem('token') === null && location.pathname !== '/') navigate('/');
   }, [access, dispatch, location.pathname, navigate]);
   const closeError = () => dispatch(setError());
   return (
      <>
         {error && <MsgError error={error} closeMsg={closeError} />}
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
         {/* hacemos renderizado condicional, fuera de Routes para mostrar en todas las rutas */}
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