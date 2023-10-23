
import { Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Page/HomePage';
import MenuPage from './Page/MenuPage';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      
      <NavBar/>
      <Routes>
        <Route path='/' element={ <HomePage/>}></Route>
        <Route path='/menu' element={ <MenuPage/>}></Route>
      </Routes>
   
      <Footer/>
    </div>
  );
}

export default App;
