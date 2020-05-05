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
    error: false,
    loading: true,
    open: false,
    errorMessage: ''
  }

  async componentDidMount() {
    this.getTodos();
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.todoText.length === 0) {
      return this.setState({ errorMessage: 'You cannot leave the text field blank' });
    }
    try {
      await axios.post('/api/todos', { text: this.state.todoText });
      this.getTodos();
    } catch (error) {
      this.setState({ error: true });
    }
  }

  handleChange = event => {
    console.log(this.state);
    this.setState({ todoText: event.target.value });
  }

  handleDeleteClick = async id => {
    try {
      await axios.delete(`/api/todos/${id}`);
      await this.getTodos();
    } catch (e) {
      console.log(e);
    }
  }

  getTodos = async () => {
    try {
      const { data: todos } = await axios.get('/api/todos');
      this.setState({ todos, loading: false, todoText: '', errorMessage: '', error: false });
    } catch (error) {
      this.setState({ errorMessage: error, error: true });
    }
  }

  handleUpdateClick = async (id, text, completed) => {
    try {
      await axios.put(`/api/todos/${id}`, { text, completed: !completed });
      await this.getTodos();
    } catch (error) {
      this.setState({ errorMessage: error, error: true });
    }
  }

  renderList = () => {
    if(this.state.loading) {
      return <BarLoader css={{ margin: '0 auto',}} width={450}/>;
    } else {
      return (
        <List animated divided >
          { this.state.todos.map(({ _id, text, completed }) => {
            return (
              <List.Item key={_id} style={{ backgroundColor: completed ? 'yellow' : 'orange', fontSize: '20px'} }>
                <List.Content floated="left" as={Link} to={`/todos/${_id}`}>
                  <p style={{ paddingTop: '5px', marginRight: '100px' }}>{text}</p>
                </List.Content>
                <List.Content floated='right'>
                  <Button color='blue' content='Mark Complete' size='small' onClick={ () => this.handleUpdateClick(_id, text, completed)}/>
                  <DeleteModal handleClick={this.handleDeleteClick} id={_id} text={text}/>
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
                header='You must be logged in to do that'
                content={this.state.errorMessage}/>
               <Form.Button fluid color="teal" type='submit' onClick={this.handleSubmit}>Add Todo</Form.Button>
              { this.renderList() }
            </Segment>
          </Form>
        </>
    );
  }
}

export default TodoFormContainer;
