import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/cart';
import { Provider } from 'react-redux';
import store from './components/store';
import Footer from './components/Footer';
function App() {
  return (
    <div>
    <Provider store={store}>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<ProductDetails />} /> 
      <Route path="/cart" element={<Cart />} /> 
    </Routes>
    <Footer/>
  </Router>
  </Provider>
  
    </div>
  
  );
}

export default App;
