import React, { Component } from 'react';
import { Card, GridColumn, Icon, Button } from 'semantic-ui-react';
import DeleteModal from '../../components/DeleteModal';


class TodoCardContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <Card fluid color='teal'>
        <Card.Content header='Todo'/>
        <Card.Content description="Date Created" />
        <Card.Content extra>
          <Icon name='user' />Completed
        </Card.Content>
        <Card.Content>
          <Button inverted color='green' icon='left arrow'  content='Go Back' onClick={ this.props.history.goBack }/>
          <Button inverted color='blue' icon='arrow circle up' content='Update'/>
          <DeleteModal/>
        </Card.Content>
      </Card>
    );
  }
}

export default TodoCardContainer;
