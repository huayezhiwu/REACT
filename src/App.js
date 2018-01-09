import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
     let user = {
        name: 'Anna'
        , hobbies: ['sport', 'music']
      }
    return (
     
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home name={'John'} age={12} user={user} >
              <p>I am a child </p>
            </Home>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hello world</h1>
          </div>
        </div>
      
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
