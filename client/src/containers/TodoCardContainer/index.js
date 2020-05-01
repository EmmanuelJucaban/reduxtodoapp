import React, { Component } from 'react';
import { Card, Icon, Button, Input, CardContent } from 'semantic-ui-react';
import DeleteModal from '../../components/DeleteModal';
import ScaleLoader from 'react-spinners/ScaleLoader';

import axios from 'axios';

class TodoCardContainer extends Component {
  state = {
    todo: {
      text: '',
      completed: ''
    },
    todoInput: ''
  };

  async componentDidMount() {
    await this.getTodo();
  }

  getTodo = async () => {
    try {
      const { data: todo } = await axios.get(`/api/todos/${this.props.match.params.id}`);
      this.setState({ todo, checkBoxStatus: todo.completed, updateModalInput: todo.text });
    } catch (e) {
      console.log(e);
    }
  }

  handleDeleteClick = async id => {
    try {
      await axios.delete(`/api/todos/${id}`);
      this.props.history.push('/todos');
    } catch (e) {
      console.log(e);
    }
  }

  handleUpdateTodoText = async () => {
    const { todo: { completed }, todoInput: text } = this.state;
    try {
      const { data: todo } = await axios.put(`/api/todos/${this.state.todo._id}`, { text, completed });
      this.setState({ todo });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = event => {
    this.setState({ todoInput: event.target.value });
  }

  render() {
    const { todo } = this.state;
    return (
      <Card fluid color='teal'>
          { todo.text ? <Card.Content header={todo.text}/> : <ScaleLoader/>}
        <Card.Content description="Date Created" />
        <Card.Content extra>
          <Icon name={ todo.completed ? 'checkmark' : 'remove'} /> { todo.completed ? 'Completed' : 'Not Completed'}
        </Card.Content>
        <CardContent>
          <Input
            value={this.state.todoInput}
            size='large'
            onChange={this.handleChange}
            placeholder='Update todo text here'
            label={<Button content='Save Text'  primary onClick={this.handleUpdateTodoText}/>}
            labelPosition='right'/>
        </CardContent>
        <Card.Content>
          <Button
            color='green'
            icon='left arrow'
            content='Go Back'
            onClick={ this.props.history.goBack }/>
          <DeleteModal
            text={todo.text}
            handleClick={this.handleDeleteClick}
            id={todo._id}/>
        </Card.Content>
      </Card>
    );
  }
}

export default TodoCardContainer;


