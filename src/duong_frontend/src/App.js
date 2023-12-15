

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AllProducts } from './components/new_admin/AllProducts';
import { AddProduct } from './components/new_admin/AddProduct';
import Dashboard from './components/new_admin/Dashboard';
import User from './components/new_admin/User';
import Login from './pages/Login';
import Signup from './pages/Signup';



function App() {
  return (
    <div >

        <BrowserRouter>
        <Routes>
    
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
    
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='dashboard/all-products' element={<AllProducts/>}/>
          <Route path='dashboard/add-products' element={<AddProduct/>}/>
          <Route path='dashboard/user' element={<User/>}/>
    
    
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
