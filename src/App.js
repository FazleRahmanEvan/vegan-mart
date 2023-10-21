
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Drinks from './Pages/AllProducts/ProductsDrinks/Drinks';
import Confectionary from './Pages/AllProducts/ProductsConfectionary/Confectionary';
import Combo from './Pages/ComboProduct/Combo';
import DrinksProductDetails from './Pages/AllProducts/ProductDetails/DrinksProductDetails';
import ConfecProductDetails from './Pages/AllProducts/ProductDetails/ConfecProductDetails';
import ComboDetails from './Pages/AllProducts/ProductDetails/ComboDetails';




function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
     <Route path="/" element ={<Home></Home>}></Route>
     <Route path="/drinks" element ={<Drinks></Drinks>}></Route>
     <Route path="/confectionary" element ={<Confectionary></Confectionary>}></Route>
     <Route path="/combo" element ={<Combo></Combo>}></Route>
     <Route path="/drinks/:_id" element ={<DrinksProductDetails></DrinksProductDetails>}></Route>
     <Route path="/confectionary/:_id" element ={<ConfecProductDetails></ConfecProductDetails>}></Route>
     <Route path="/combo/:_id" element ={<ComboDetails></ComboDetails>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
