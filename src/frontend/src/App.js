
import './App.css';
import Admin from './components/admin/admin';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div >
      <BrowserRouter>

      <Routes>
        <Route path='/admin' element={<Admin/>}></Route>




      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
