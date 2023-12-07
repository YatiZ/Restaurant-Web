
import { Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Page/HomePage';
import MenuPage from './Page/MenuPage';
import Footer from './Components/Footer';
import AboutUsPage from './Page/AboutUsPage';
import ContactPage from './Page/ContactPage';
import OrderPage from './Page/OrderPage';
import ReviewPage from './Page/ReviewPage';



function App() {
  return (
    <div >
      
      <NavBar/>
    
      <Routes>
        <Route path='/' element={ <HomePage/>}></Route>
        <Route path='/menu' element={ <MenuPage/>}></Route>
        <Route path='/about-us' element={ <AboutUsPage/>}></Route>
        <Route path='/contact-us' element={<ContactPage/>}></Route>
        <Route path='/order-list' element={<OrderPage/>}></Route>
        <Route path='/review-page' element={<ReviewPage/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
