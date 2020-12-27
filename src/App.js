import React from 'react'
import './App.css'


import { BrowserRouter as Router, Route, } from 'react-router-dom';

import NavBar from './Components/Navigation/NavBar'
import Home from './Components/Contents/Home'
import Profile from './Components/Contents/Profile'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
        </div>
      </Router>
      
    );
  }
}

export default App;
