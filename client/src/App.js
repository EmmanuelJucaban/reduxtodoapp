import React from 'react';
import { Container, Button, Form, Grid, Header, Image, Message, Segment  } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LogForm from './containers/LogForm';
function App() {
  return (
    <Router>
      <Container>

        <Route exact path='/' render={ () => <LogForm logged={false}/>} />
        <Route exact path='/signin' render={ () => <LogForm logged={true}/>} />
      </Container>
    </Router>
  );
}

export default App;
