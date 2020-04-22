import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const Navbar = () => (
  <Menu>
    <Menu.Item
      position='right'
      as={Link}
      content='Home'
      to={'/'}
    />
    <Menu.Item
      as={Link}
      content='Todos'
      to={'/todos'}
    />
  </Menu>
);
export default Navbar;
