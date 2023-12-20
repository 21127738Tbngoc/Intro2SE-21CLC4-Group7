import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllProducts } from './components/new_admin/AllProducts';
import { AllArticles } from './components/new_admin/AllArticles';

import { AddProduct } from './components/new_admin/AddProduct';
import { AddArticle } from './components/new_admin/AddArticle';
import Dashboard from './components/new_admin/Dashboard';
import User from './components/new_admin/User';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Searchbar from "./components/searchbar/searchbar";

function App() {
  return (
    <div >

      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<div><Navbar/><Login /><Footer/></div>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<div><Navbar/></div>}/>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='dashboard/all-products' element={<AllProducts />} />
          <Route path='dashboard/add-products' element={<AddProduct />} />
          <Route path='dashboard/user' element={<User />} />
          <Route path='dashboard/add-articles' element={<AddArticle />} />
          <Route path='dashboard/all-articles' element={<AllArticles />} />

          
          /!*<Route path='/test/searchbar' element={<Searchbar/>} />
          <Route path='/about' element={<div><Navbar/><Footer/></div>} />
          <Route path='/partners' element={<div><Navbar/><Footer/></div>} />
          <Route path='/designers' element={<div><Navbar/><Footer/></div>} />
          <Route path={'/test'} element={<div><Navbar/><Footer/></div>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
