import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  FormInput,
  Header,
  List,
  Segment
} from 'semantic-ui-react';

class TodoFormContainer extends Component {
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

  handleClick = event => {
    event.preventDefault();
  }
  render() {
    return (
        <>
          <Header as="h2" color="teal" textAlign="center">Welcome to the todo app!</Header>
          <Form size="large" >
            <Segment stacked>
              <FormInput
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Add a todo'
                value={this.state.todoText}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}/>
               <Form.Button fluid color="teal" type='submit' onClick={this.handleSubmit}>Add Todo</Form.Button>
              <List divided >
                { this.state.todos.map((todo,i) => {
                  return (
                    <List.Item key={i} as={Link} to={`/todos/${i}`}>
                      <List.Content floated="left">
                        <p style={{ paddingTop: '5px' }}>{todo}</p>
                      </List.Content>
                      <List.Content floated="right">
                        <Button size="mini" negative onClick={ this.handleClick }>Delete</Button>
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Segment>
          </Form>
        </>
    );
  }
}

export default TodoFormContainer;
