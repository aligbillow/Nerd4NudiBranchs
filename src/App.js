import React, { Component } from 'react';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Login from './Components/Login/Login';
// import NewUser from './Components/NewUser/NewUser';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'Login'
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="App">
          
          <Navigation onRouteChange = {this.onRouteChange} />
          { this.state.route === 'Login' 
          ? <Login onRouteChange = {this.onRouteChange} />
          : <div>
              <Logo />   
       {/*   to-do
            <NewUser />    
            <Catalog />
            <AddPhoto /> */
        }
          </div>
          }
      </div>
    );


  }
}


export default App;
