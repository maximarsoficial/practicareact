import React from 'react';
//import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup } from 'reactstrap';

export class EditModal extends React.Component {
  constructor(props){
      super(props)
      this.props = props
      this.state={
          puesto: this.props.data.puesto,
          compañia: this.props.data.empresa,
          ciudad: this.props.data.ciudad,
          pais: this.props.data.pais, 
      }

      this.handleChange = this.handleChange.bind(this);
      this.editar = this.editar.bind(this);
  };


  handleChange (e){
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    })
  }

  editar(){
    this.props.actualizar(this.state)
  }
  

  render(){
    return(
        <>
        
          
           <div><h3>Editar Registro</h3></div>
          
            
              <label>
                Puesto: 
              </label>
              <input className="form-control" name="puesto" type="text" onChange={this.handleChange} value={this.state.puesto} />
           
              <label>
                Compañia: 
              </label>
              <input className="form-control" name="compañia" type="text" onChange={this.handleChange} value={this.state.compañia} />
            
              <label>
                Pais: 
              </label>
              <input className="form-control" name="pais" type="text" onChange={this.handleChange} value={this.state.pais} />
          
              <label>
                Ciudad: 
              </label>
              <input className="form-control" name="ciudad" type="text" onChange={this.handleChange} value={this.state.ciudad} />
            
          
            <button
              color="primary"
              onClick={() => this.editar()}>
                Editar
            </button>
            <button
              color="danger"
              onClick={this.props.cerrarModal}>
              Cancelar
            </button>
          
        
      </>
    )
  }
} 