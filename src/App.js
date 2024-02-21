import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import WishList from './Pages/WishList';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
