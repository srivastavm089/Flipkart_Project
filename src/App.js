import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home,Navbar, Footer } from "./components/index";


import SinglePage from "./SinglePage/SinglePage";
import Cart from './components/Cart/Cart'
import Login from './components/login/Login'

import CheckOut from "./components/Cart/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SinglePage/:company/:mobile" element={<SinglePage/>}/>
        <Route path="/cart" element={<Cart/>}/>
         <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/login" element={<Login/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
