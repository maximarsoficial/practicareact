import React from 'react';
import { Redirect } from 'react-router';

class NotFoundView extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <Redirect to="/"></Redirect>
  }

 
}

export default NotFoundView;
