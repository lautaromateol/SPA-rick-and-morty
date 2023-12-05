import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserProvider.jsx';
import { Toaster } from "react-hot-toast"

function App() {

   return (
      <UserProvider>
         <div className='App'>
            <Nav />
            <Toaster/>
            <Routes>
               <Route path='/' element={<Cards />} />
               <Route path='/about' element={<About />} />
               <Route path='/detail/:id' element={<Detail />} />
               <Route path='/login' element={<Login />} />
               <Route path='/register' element={<Register />} />
               <Route path='/favorites' element={<Favorites/>}/>
            </Routes>
         </div>
      </UserProvider>
   );
}

export default App;
