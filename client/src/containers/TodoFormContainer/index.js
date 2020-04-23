import React, { Component } from 'react';
import {
  Button,
  Form,
  FormInput,
  Grid,
  GridColumn,
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
  render() {
    return (
        <>
          <Header as="h2" color="teal" textAlign="center">Welcome to the todo app!</Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <FormInput
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Add a todo'
                value={this.state.todoText}
                onChange={this.handleChange}/>
              <List divided >
                { this.state.todos.map((todo,i) => {
                  return (
                    <List.Item key={i}>
                      <List.Content floated="left">
                        <p style={{ paddingTop: '5px' }}>{todo}</p>
                      </List.Content>
                      <List.Content floated="right">
                        <Button size="mini" negative>Delete</Button>
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
