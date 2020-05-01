import React from 'react'
import { Button, Card, Header, Icon, Modal } from 'semantic-ui-react';


const DeleteModal = ({ handleClick, id, text }) => (
  <Modal trigger={ <Button color='red' icon='window close' content='Delete'/>}
         basic size='small'
        style={{ width: '450px'}}>
    <Header icon='archive' content='Delete old todo' />
    <Modal.Content>
      <p>Are you sure you want to delete this todo?</p>
      <p>{text}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button fluid negative onClick={ () => handleClick(id)}>
        <Icon name='remove'/> Are you sure you want to delete?
      </Button>
    </Modal.Actions>
  </Modal>
);

export default DeleteModal
