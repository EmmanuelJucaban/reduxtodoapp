import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';


class LogForm extends Component {
  render() {
    const { logged } = this.props;
    return (
      <>
        <Header as='h2' color='teal' textAlign='center'>
          <h1>Log in to your account</h1>
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='teal' fluid size='large'>
              {!logged ? 'Sign Up' : "Login"}
            </Button>
          </Segment>
        </Form>
        <Message>
          {/*{!logged ? 'New to us?' : 'Welcome back!'} <Link to={!logged ? '/signin' : '/signin'}>{!logged ? 'Sign Up' : 'Sign In'}</Link>*/}
          {!logged ? 'Already have an account?' : 'New to us?'} <Link to={!logged ? '/signin' : '/'}>{!logged ? 'Login' : 'Sign Up'}</Link>
        </Message>
      </>
    );
  }
}

export default LogForm;
