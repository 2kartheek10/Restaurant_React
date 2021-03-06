// import React from 'react';
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';





//class App extends Component {

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES
      };
      

    }
  render() {
    const store = ConfigureStore();
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        
        <Main></Main>
       

      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
