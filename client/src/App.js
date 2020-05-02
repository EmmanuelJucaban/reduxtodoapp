import React, { Component } from 'react';
import {
  Container,
  Grid,
  Menu,
  GridColumn
} from 'semantic-ui-react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import LogForm from './containers/LogForm';
import TodoFormContainer from './containers/TodoFormContainer';
import TodoCardContainer from './containers/TodoCardContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }} >
             <GridColumn style={{ maxWidth: 600 }}>
              <Menu widths={3}>
                <Menu.Item
                  name='Sign Up'
                  as={Link}
                  to='/'
                />
                <Menu.Item
                  name='Sign In'
                  as={Link}
                  to='/signin'
                />
                <Menu.Item
                  as={Link}
                  name='Todo'
                  to='/todos'
                />
              </Menu>
              <Route exact path='/' render={ () => <LogForm logged={false}/>}/>
              <Route exact path='/signin' render={ () => <LogForm logged={true}/>}/>
              <Route exact path='/todos' component={TodoFormContainer}/>
              <Route exact path='/todos/:id' component={TodoCardContainer}/>
            </GridColumn>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default App;
