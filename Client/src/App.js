import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { HomePage, AboutPage, DetailPage, ErrorPage, LoginPage, FavoritesPage } from './pages'
import { Nav, MsgError } from './components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, loginUser, logoutUser, removeCharacter, setError } from './redux/actions';

function App() {
   const characters = useSelector((state) => state.allCharacters); //obtengo todos desde el estado global
   const error = useSelector((state) => state.error);
   const access = useSelector((state) => state.access);
   const location = useLocation(); //obtengo nombre de la ruta donde estoy
   const navigate = useNavigate(); //utilizado para redireccionar
   const dispatch = useDispatch(); //utilizado para despachar acciones al estado global
   const onSearch = (id) => dispatch(addCharacter(id)); 
   const onClose = (id) => dispatch(removeCharacter(id)); // id proviene de Home/FavoritesPage para eliminar character, despacha accion a redux
   const login = (user) => dispatch(loginUser(user)) && access && navigate('/Home')
   const logout = () => dispatch(logoutUser()) && navigate('/');
   useEffect(() => {
      // cada vez que cambie navigate o access ingresamos a la funcion
      !access && navigate('/');
   }, [navigate, access]);
   const closeError = () => dispatch(setError());
   return (
      <>
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
         {error && <MsgError error={error} closeMsg={closeError} />}
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