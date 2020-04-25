import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BarLoader from 'react-spinners/BarLoader';

import DeleteModal from '../../components/DeleteModal';

import {
  Button,
  Form,
  FormInput,
  Header,
  List,
  Segment,
  Message
} from 'semantic-ui-react'
import axios from 'axios';


class TodoFormContainer extends Component {
  state = {
    todos: [],
    todoText: '',
    error: '',
    loading: true,
    open: false
  }
  async componentDidMount() {
    this.getTodos();
  }
  handleSubmit = async event => {
    event.preventDefault();
    // const todos = [...this.state.todos, this.state.todoText];
    try {
      const response = await axios.post('/api/todos', { text: this.state.todoText });
      this.getTodos();
    } catch (error) {
      this.setState({ error: 'You cannot leave the text field blank' });
    }
  }
  handleChange = event => {
    console.log(this.state);
    this.setState({ todoText: event.target.value });
  }
  handleClick = async id => {
    try {
      const { data } = await axios.delete(`/api/todos/${id}`);
      this.getTodos();
    } catch (e) {
      console.log(e);
    }
  }
  getTodos = async () => {
    try {
      const { data: todos } = await axios.get('/api/todos');
      this.setState({ todos, loading: false, todoText: '', error: '' });
    } catch (error) {
      this.setState({ error });
    }
  }

  renderList = () => {
    const self = this;
    if(this.state.loading) {
      return <BarLoader css={{ margin: '0 auto',}} width={450}/>;
    } else {
      return (
        <List divided >
          { this.state.todos.map(({ _id, text, completed }) => {
            return (
              <List.Item key={_id}>
                <List.Content floated="left" as={Link} to={`/todos/${_id}`}>
                  <p style={{ paddingTop: '5px' }}>{text}</p>
                </List.Content>
                <List.Content floated="right">
                  <DeleteModal size="mini" negative handleClick={self.handleClick} id={_id}>Delete</DeleteModal>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      )
    }
  }

  render() {
    return (
        <>
          <Header as="h2" color="teal" textAlign="center">Welcome to the todo app!</Header>
          <Form size="large" error={ this.state.error }>
            <Segment stacked>
              <FormInput
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Add a todo'
                value={this.state.todoText}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}/>
              <Message
                error
                header='Action Forbidden'
                content={this.state.error}/>
               <Form.Button fluid color="teal" type='submit' onClick={this.handleSubmit}>Add Todo</Form.Button>
              { this.renderList() }
            </Segment>
          </Form>
        </>
    );
  }
}

export default TodoFormContainer;
