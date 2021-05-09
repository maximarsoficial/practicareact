import React from 'react';

export default class Job extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  render() {
    return ( 
    
    <li key={this.id}>
                <h2>{this.props.elem.name}</h2>
                <p>{this.props.elem.company}</p>
                <p>{this.props.elem.city}</p>
                <p>{this.props.elem.country}</p>
                <button onClick={() => this.props.onDelete(this.id)}>ELIMINAR</button>
                </li>
    );
  }

  componentDidMount() {}
}

// MERN(React) - The take away - Actividad 02, parte 01 (Routing & SPA)
