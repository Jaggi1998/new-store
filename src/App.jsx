import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../src/assets/fonts/googlefont.css";
import "./assets/fontIcons/fonticons";
import "./assets/jquery";
import Navbar from './Home/Navbar';
import Index from './Home/Index';
import Form from './Forms/Forms';
import Footer from "./Home/Footer";
import ProductList from './Pages/ProductList';
import Contact from './Pages/ContactUs';
import CartPage from './Pages/CartPage';
import ViewCart from './Pages/ViewCart';
import { Routes , Route , Navigate , BrowserRouter } from 'react-router-dom';
import './Style.css';
import './Responsive.css';

function App() {
  return (
    <>
<Navbar/>

<BrowserRouter>
<Routes>
<Route path="/"  element={<Index/>} />
<Route path="/Login"  element={<Form/>} />
<Route path="/ContactUs"  element={<Contact/>} />
<Route path="/ProductDetail"  element={<CartPage/>} />
<Route path="/ViewCart"  element={<ViewCart/>} />
<Route path="/ProductList"  element={<ProductList/>} />
<Route  render={() => <Navigate to="/" />} />
</Routes>
</BrowserRouter>
<Footer/>
    </>
  )
}

export default App
