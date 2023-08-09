import React from 'react';
// import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Login from './Components/Login/Login';
import NewUser from './Components/NewUser/NewUser';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Logo />
      <Login />
      <NewUser />

      {/* 
      <Catalog />
      <AddPhoto />
       */}

    </div>
  );
}

export default App;
