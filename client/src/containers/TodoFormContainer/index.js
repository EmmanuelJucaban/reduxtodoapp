import React, { Component } from 'react';
import {
  Button,
  Form,
  FormInput,
  Grid,
  GridColumn,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';

class TodoFormContainer extends Component {
  render() {
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <GridColumn style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">Welcome to the todo app!</Header>
          <Form size="large">
            <Segment stacked>
              <FormInput fluid icon='user' iconPosition='left' placeholder='Add a todo'/>
            </Segment>
          </Form>
        </GridColumn>
      </Grid>
    );
  }
}

export default TodoFormContainer;
