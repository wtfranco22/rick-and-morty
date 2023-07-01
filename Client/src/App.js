import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { HomePage, AboutPage, DetailPage, ErrorPage, LoginPage, FavoritesPage } from './pages';
import { Nav, MsgError, Loading, Footer } from './components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, loginUser, logoutUser, reloadAccess, removeCharacter, setError } from './redux/actions';
function App() {
   const { allCharacters: characters, error, access, loading, errorPage } = useSelector((state) => state);
   const location = useLocation(); //obtengo nombre de la ruta donde estoy
   const navigate = useNavigate(); //utilizado para redireccionar
   const dispatch = useDispatch(); //utilizado para despachar acciones al estado global
   const onSearch = (id) => dispatch(addCharacter(id));
   const onClose = (id) => dispatch(removeCharacter(id)); // id proviene de Home/FavoritesPage para eliminar character, despacha accion a redux
   const login = (user) => {
      dispatch(loginUser(user))
         .then(() => navigate('/Home'))
         .catch(() => navigate('/'))
   };
   const logout = () => dispatch(logoutUser());
   useEffect(() => {
      const token = localStorage.getItem('token');
      if (token && !access) dispatch(reloadAccess()).then(location.pathname === '/' && navigate('/Home'));
      if (!access && localStorage.getItem('token') === null && location.pathname !== '/') navigate('/');
   }, [access, dispatch, location.pathname, navigate]);
   const closeError = () => dispatch(setError());
   return (
      <>
         {loading ? <Loading /> : error && <MsgError error={error} closeMsg={closeError} />}
         {(location.pathname !== '/' && !errorPage) && <Nav onSearch={onSearch} logout={logout} />}
         {/* hacemos renderizado condicional, fuera de Routes para mostrar en todas las rutas */}
         <div className='init'>
            <Routes>
               <Route path='/' element={<LoginPage login={login} />} />
               <Route path='/Home' element={<HomePage characters={characters} onClose={onClose} />} />
               <Route path='/Favorites' element={<FavoritesPage onClose={onClose} />} />
               <Route path='/About' element={<AboutPage />} />
               <Route path='/Detail/:id' element={<DetailPage />} />
               <Route path='*' element={<ErrorPage />} />
            </Routes>
         </div>
         {location.pathname !== '/' && <Footer />}
      </>
   )
}
export default App;