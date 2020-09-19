import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
// Both BrowserRouter and HashRouter components were introduced in React Router ver. 4 as subclasses of Router class. Simply, BrowserRouter syncs the UI with the current URL in your browser, This is done by the means of HTML-5 History API. On the other hand, HashRouter uses the Hash part of your URL to sync.
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      </Router>
    </div>
  );
}

export default App;
