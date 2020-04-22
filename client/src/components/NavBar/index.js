import React, { Component } from 'react';
import { Container, Grid, Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const Navbar = (props) => {
  console.log(props.location.pathname);
  return (
      <Grid.Column width={4}>
        <Menu fluid vertical tabular>
          <Menu.Item
            name='bio'
            as={Link}
            active={props.location.pathname === "/"}
            to={'/'}
          />
          <Menu.Item
            name='pics'
            as={Link}
            active={props.location.pathname === "/todos"}
            to={'/todos'}
          />
        </Menu>
      </Grid.Column>
  );
}

export default withRouter(Navbar);
