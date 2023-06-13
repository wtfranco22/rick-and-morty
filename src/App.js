import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { HomePage, AboutPage, DetailPage, ErrorPage, LoginPage, FavoritesPage } from './pages'
import { Nav } from './components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, removeCharacter, cleanCharacters, setAccess } from './redux/actions';

function App() {
   const characters = useSelector((state) => state.allCharacters); //obtengo todos desde el estado global
   const user = useSelector((state) => state.user);
   const location = useLocation(); //obtengo nombre de la ruta donde estoy
   const navigate = useNavigate(); //utilizado para redireccionar
   const dispatch = useDispatch(); //utilizado para despachar acciones al estado global
   const onSearch = (id) => {
      // fn encargada de agregar un nuevo character al estado global
      !characters.some((character) => character.id === Number(id)) ? // verificamos si existe
         dispatch(addCharacter(id)) : alert('already exists'); // despachamos por accion a redux
   }
   const onClose = (id) => dispatch(removeCharacter(id)); // id proviene de Home/FavoritesPage para eliminar character, despacha accion a redux
   const login = (userData) => {
      //userData recibido por loginPage
      if (userData.email === user.email && userData.password === user.password) {
         //si coincide, setea acceso y redirecciona a Home
         dispatch(setAccess(true));
         navigate('/Home');
      } else {
         alert('Datos incorrectos');
      }
   }
   const logout = () => {
      // al cerrar sesion, eliminamos estado global de characters y acceso, redireccionamos a login
      dispatch(cleanCharacters());
      dispatch(setAccess(false));
      navigate('/');
   }
   useEffect(() => {
      // cada vez que cambie navigate o user.access ingresamos a la fn
      !user.access && navigate('/');
   }, [navigate, user.access]);
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