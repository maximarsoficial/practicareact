import React from 'react';
import axios from 'axios'
import {postData} from '../Clients/api';



class Companies extends React.Component {
  constructor(){
    super()
    this.state = {
        compañia: '',
        ciudad: '',
        ciudades: [],
        compañias: [],
        withError: false,

      };
}
async componentDidMount(){
  console.log(this.getCompañias());    
  console.log(this.getCiudades()); 
}

    getCiudades = async () => {
      const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/places/');
      this.setState({
        ciudades:  res.data
      })
    }
  

//FUNCIONA PERFECTO - AQUI TRAIGO 
getCompañias = async () => {
  const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/organizations/');
  this.setState({
    compañias:  res.data
  })
  console.log(res)
}

  //FUNCIONA PERFECTO
  deleteUser = async (id) => {
    const response = window.confirm('¿ESTAS SEGURO DE ELIMINARLO? ⚠');
    if (response) {
        await axios.delete('https://api-fake-pilar-tecno.herokuapp.com/organizations/' + id);
        this.getCompañias();
    }
}
addCompañia = () => {
  let compañiaNombre = this.state.compañia
  let ciudadId = this.state.ciudad.id

  let url = 'organizations'
  let data = {name: compañiaNombre , placeId : ciudadId }
  postData(url, data).then(res => this.setState({
    compañias: [...this.state.compañias, res]  
  }))

   alert('ciudad agregada exitosamente!!!');
}
handleNewCompañia(e){
  this.setState({
    compañia: e.target.value
  })
}


handleSelectCity = (e) => {
  this.setState({
    ciudad: JSON.parse(e.target.value)

  });  
}

  render() {
    return (
      <>
    <div className="container m-5">
      <div className="row">
        <div className="col m-5">
          <h1 align="center">AGREGAR COMPAÑIA</h1><hr></hr>
            <label>INGRESE COMPAÑIA</label><br></br>
              <input type="text"
                     placeholder="ingrese compañia"
                     value={this.state.getCompañias}
                     onChange={(e) => this.handleNewCompañia(e)} ></input><br></br><br></br>
    
              <label>
               SELECIONE LA CIUDAD A LA CUAL PERTENECE SU COMPAÑIA: 
              </label>
              <select class="custom-select" 
                      id="inputGroupSelect01"
                      name="ciudad"
						          onChange={(e) => this.handleSelectCity(e)}
						          value={JSON.stringify(this.state.getCiudades)} >
					    	<option value={JSON.stringify({})}>Selecione su Ciudad</option>
                  { this.state.ciudades.map((apiCiudad) => (
                  <option key={apiCiudad.id} value={JSON.stringify(apiCiudad)}>{apiCiudad.name}</option>
                        ))}
					</select><br></br><hr></hr>

          <button className="btn btn-primary m-2"
                  onClick={() => this.addCompañia()}>
                  CARGAR</button><hr></hr><br></br>
          
        </div>
      </div>
      <h4>CON DOBLE CLICK PUEDE ELIMINARLO</h4><hr></hr><br></br>

      <div className="col-md-8">
         <ul className="list-group">
                {
                  this.state.compañias.map(apiCompañia => ( 
                 <li className="list-group-item list-group-item-action"
                  key={apiCompañia}
                  onDoubleClick ={() => this.deleteUser(apiCompañia.id)} 
                 >{apiCompañia.name}  
                 </li>))}
        </ul>
        </div>
    </div>
      </>
    );
  }
}
export default Companies;