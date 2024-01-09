import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopContextProvider from './components/context/ShopContext';  // Import your ShopContextProvider
import {AllProducts} from './components/new_admin/AllProducts';
import {AllArticles} from './components/new_admin/AllArticles';
import {AllOrder} from './components/new_admin/AllOrder';
import {AddProduct} from './components/new_admin/AddProduct';
import {AddArticle} from './components/new_admin/AddArticle';
import Dashboard from './components/new_admin/Dashboard';
import User from './components/new_admin/User';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Searchbar from "./components/searchbar/searchbar";
import Home from './pages/Home';
import Shop from "./pages/shop";
import ArticleDetail from "./pages/ArticleDetail";
import DiningRoom from './pages/DiningRoom';
import Bathroom from './pages/Bathroom';
import Bedroom from './pages/Bedroom';
import OrderHistory from './pages/OrderHistory';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Warranty from './pages/Warranty';
import Refund from './pages/Refund';
import Articles from './pages/Articles';
import LivingRoom from './pages/LivingRoom';
import Faqs from "./pages/Faqs";
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <div>
      <ShopContextProvider>  {/* Wrap the entire application with ShopContextProvider */}
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<div><Login /></div>} />
            <Route path='/signup' element={<div><Signup /></div>} />
            <Route path='/' element={<div><Navbar /><Home /><Footer /></div>} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='dashboard/all-products' element={<AllProducts />} />
            <Route path='dashboard/add-products' element={<AddProduct />} />
            <Route path='dashboard/user' element={<User />} />
            <Route path='dashboard/add-articles' element={<AddArticle />} />
            <Route path='dashboard/all-orders' element={<AllOrder />} />
            <Route path='dashboard/all-articles' element={<AllArticles />} />


            <Route path='/test/searchbar' element={<Searchbar />} />
            <Route path='/about' element={<div><Navbar /><About/><Footer /></div>} />
            <Route path="/product/:productId" element={<div><Navbar /><ProductDetail /><Footer/></div>} />
            <Route path='/profile' element={<div><Navbar /><UserProfile/><Footer /></div>} />
            <Route path='/test' element={
              <div>
                <Navbar />
                <Shop />
                <Footer />
              </div>
            } />
            <Route path='/user/orderhistory' element={<div><Navbar /><OrderHistory/><Footer /></div>} />
            <Route path='/article/:articleId' element={<div><Navbar /><ArticleDetail/><Footer /></div>} />
            <Route path='/diningroom' element={<div><Navbar/><DiningRoom/><Footer/></div>}/>
            <Route path='/bathroom' element={<div><Navbar/><Bathroom/><Footer/></div>}/>
            <Route path='/bedroom' element={<div><Navbar/><Bedroom/><Footer/></div>}/>
            <Route path='/livingroom' element={<div><Navbar/><LivingRoom/><Footer/></div>}/>
            <Route path='/articles' element={<div><Navbar/><Articles/><Footer/></div>}/>
            <Route path='/shop' element={<div><Navbar/><Shop /><Footer/></div>}/>
            <Route path='/faqs' element={<div><Navbar/><Faqs /><Footer/></div>}/>
            <Route path='/warranty' element={<div><Navbar/><Warranty /><Footer/></div>}/>
            

          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );

}

export default App;
