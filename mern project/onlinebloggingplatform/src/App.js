import './App.css';
import Discussion from './components/Discussion';
import MyFeed from './components/MyFeed';
import Navbar from './components/Navbar';
import { Outlet, Route,Routes, useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material'
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path = "m" element ={<MyFeed heading="HERE IS YOUR WORK"/>}/>
      <Route path ="d" element={<Discussion/>}/> 
       <Route path = "h" element={<Home/>}>
        <Route index element={<Outlet/>}/>
      <Route path = "l" element={<Login/>}/>
      </Route>
      </Routes>    
      </div>
    </>
  );
}

export default App;