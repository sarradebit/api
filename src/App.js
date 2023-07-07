import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import { Admin } from './Pages/Admin';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import User from './Pages/User';

function App() {
  const [isAuth , setIsAuth] = useState(true)
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/*' element={<Error/>}/>
        {isAuth? <Route path='/admins' element={<Admin/>} /> : <Route path='/*' element={<Error/>}/> }       
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/all-users'  element={<User/>} />
      </Routes>

    </div>
  );
}

export default App;
