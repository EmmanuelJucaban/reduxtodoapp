import React, { Component } from 'react';
import {
  Card,
  Icon,
  Container,
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Menu,
  GridColumn, FormInput, List, MenuItem
} from 'semantic-ui-react';


import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// import LogForm from './containers/LogForm';
import TodoFormContainer from './containers/TodoFormContainer';
import LogForm from './containers/LogForm';
import TodoCardContainer from './containers/TodoCardContainer';


class App extends Component {
  state = {
    todos: [],
    todoText: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const todos = [...this.state.todos, this.state.todoText];
    this.setState({ todos, todoText: '' });
  }

  handleChange = event => {
    console.log(this.state);
    this.setState({ todoText: event.target.value });
  }


  render() {
    return (
      <Router>
        <Container>
          <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }} inverted>
             <GridColumn style={{ maxWidth: 500 }}>
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

          {/*<Route exact path='/' render={ () => <LogForm logged={false}/>} />*/}
          {/*<Route exact path='/signin' render={ () => <LogForm logged={true}/>} />*/}
        </Container>
      </Router>
    );
  }
}

export default App;
