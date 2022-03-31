import {useState, useContext} from 'react'
import { Route, Routes, Navigate, BrowserRouter} from 'react-router-dom'
import './App.css';
import { AuthContext } from './context/AuthContext';
import  Auth from './pages/Auth';
import  Chat from './pages/chat';


function App() {

  const {authState: {isLoggedIn}} = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path='/' element={isLoggedIn ? <Chat /> : <Navigate to='/auth' />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
