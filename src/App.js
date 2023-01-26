import './App.css';
import Home from './Pages/Home';
import SearchBar from './components/Searchbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';
import CartProducts from './components/CartProducts';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import WomenProducts from './components/WomenProducts';
import ElectronicProducts from './components/ElectronicProducts';
import Kids from './components/Kids';

function App() {

  return (
    <>
      <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/products' element={<SearchBar />} ></Route>
            <Route path='/woman' element={<WomenProducts />} ></Route>
            <Route path='/cart' element={<CartProducts />} ></Route>
            <Route path='/kids' element={<Kids />} ></Route>
            <Route path='/electronics' element={<ElectronicProducts />} ></Route>
            <Route path='/product/:id' element={<ProductDetail />} ></Route>
          </Routes>
        <Footer/>
      </CartProvider>
    </>
  );
}

export default App;
