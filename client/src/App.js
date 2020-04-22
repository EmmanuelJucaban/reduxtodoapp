import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/NavBar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path={'/'}>
        <h1>Hello World</h1>
      </Route>
      <Route exact path={'/login'}>
        <h1>Todos!</h1>
      </Route>
    </Router>
  );
}

export default App;
