import React from 'react';
import axios from 'axios';
import {postData} from '../Clients/api';

class Puestos extends React.Component {
  constructor(){
    super();
    this.state = {
      puesto: '',
      descripcion: '',
      compañia: '',
      puestos: [],
      descripciones: [],
      compañias: [],
      withError: false
  };
  }
  async componentDidMount(){
    console.log(this.getPuestos());    
    console.log(this.getCompañias());
                          
  }

  //FUNCIONA PERFECTO - AQUI TRAIGO 
  getPuestos = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/jobs/');
    this.setState({
      puestos:  res.data
    })
    console.log(res)
  }

  getCompañias = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/organizations/');
    this.setState({
      compañias:  res.data
    })
  }
  


//FUNCIONA PERFECTO
  deleteUser = async (id) => {
    const response = window.confirm('¿ESTAS SEGURO DE ELIMINARLO? ⚠');
    if (response) {
        await axios.delete('https://api-fake-pilar-tecno.herokuapp.com/jobs/' + id);
        this.getPuestos();
    }
}


   addPuesto = () => {
    let puestoNombre = this.state.puesto
    let compañiaId = this.state.compañia.id
    let puestoDescripcion = this.state.descripcion


      let url = 'jobs'
      let data = {position: puestoNombre, description: puestoDescripcion , 
        organizationId: compañiaId}
      postData(url, data).then(res => this.setState({
        puestos: [...this.state.puestos, res]  
      }))

       alert('ciudad agregada exitosamente!!!');
  }
   handlePuesto(e){
    this.setState({
        puesto: e.target.value
   })
  }
  handleDescripcion(e){
    this.setState({
        descripcion: e.target.value
   })
  }
  handleSelectCompañia = (e) => {
		e.preventDefault();
		this.setState({
			compañia: JSON.parse(e.target.value),
      
		});  
  }

  render() {
    return (
    <div className="container m-5">
      <div className="row">
        <div className="col m-5">

        {this.state.withError && <p>HUBO UN ERROR AL CONECTARSE</p>}

        <h1 align="center">AGREGAR PUESTO</h1><hr></hr>
        <label>INGRESE PUESTO:</label><br></br>
            <input type="text"
                    value={this.state.puesto}
                    onChange={(e) => this.handlePuesto(e)}
                    placeholder="ingrese puesto"></input><br></br><br></br>

       <label>INGRESE DESCRIPCION:</label><br></br>
            <input type="text"
                    value={this.state.descripcion}
                    onChange={(e) => this.handleDescripcion(e)}
                    placeholder="ingrese descripcion"></input><br></br><br></br>

           <label> SELECIONE LA COMPAÑIA A LA QUE PERTENECE:  </label>
              <select class="custom-select" 
                      id="inputGroupSelect01"
                      name="compañia"
						          onChange={(e) => this.handleSelectCompañia(e)}
						          value={JSON.stringify(this.state.getCompañias)}>

						<option value={JSON.stringify({})}>Elija Compañia</option>
            { this.state.compañias.map((apiCompañia) => (
                            <option key={apiCompañia} value={JSON.stringify(apiCompañia)}>{apiCompañia.name}</option>
                        ))}
        			</select><br></br><br></br>



          <button onClick={this.addPuesto}
                  type="submit" className="btn btn-primary m-2"
          >CARGAR</button><br></br><hr></hr>
         
          <div>
        </div>
        </div>
      </div>
      <h4>CON DOBLE CLICK PUEDE ELIMINARLO</h4><hr></hr><br></br>
      <div className="col-md-8">
         <ul className="list-group">
                {
                this.state.puestos.length > 0 &&
                this.state.compañias.length > 0 &&
                this.state.puestos.map(apiPuesto => {
                let compañia = this.state.compañias.find(compañia => compañia.id === apiPuesto.organizationId)
                
                    return( 
                 <li className="list-group-item list-group-item-action"
                  key={apiPuesto}
                  onDoubleClick ={() => this.deleteUser(apiPuesto.id)} 
                 >{apiPuesto.position} - {apiPuesto.description}  - {compañia.name}
                 </li>)} )}
        </ul>
        </div>
    </div>
    )
  }
}
export default Puestos;