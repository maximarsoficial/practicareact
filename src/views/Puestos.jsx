import React from 'react';
import axios from 'axios';

class Puestos extends React.Component {
  constructor(){
    super();
    this.state = {
      puesto: '',
      ciudad: '',
      pais: '',
      compañia: '',
      puestos: [],
      ciudades: [],
      paises: [],
      compañias: [],
      withError: false
  };
  }
  async componentDidMount(){
    console.log(this.getPuestos());  
    console.log(this.getCiudades());    
    console.log(this.getPaises());  
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
  getCiudades = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/places/');
    this.setState({
      ciudades:  res.data
    })
  }
  getPaises = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/countries/');
    this.setState({
      paises:  res.data
    })
  }


//FUNCIONA PERFECTO
  deleteUser = async (id) => {
    const response = window.confirm('are you sure you want to delete it?');
    if (response) {
        await axios.delete('https://api-fake-pilar-tecno.herokuapp.com/jobs/' + id);
        this.getPuestos();
    }
}


   addPuesto = () => {
     let puesto = this.state.puesto;
     console.log(puesto);
       this.setState({
        puestos: [...this.state.puestos, puesto]
       });
  }
   handlePuesto(e){
    this.setState({
        puesto: e.target.value
   })
  }
  handleSelectPuesto = (e) => {
		e.preventDefault();
		this.setState({
			puesto: JSON.parse(e.target.value),
      
		});  
  }
  handleSelectCountry = (e) => {
		e.preventDefault();
		this.setState({
			pais: JSON.parse(e.target.value),
      
		});  
  }

  handleSelectCity = (e) => {
		e.preventDefault();
		this.setState({
			ciudad: JSON.parse(e.target.value)
      
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
                    placeholder="ingrese puesto"></input><br></br>
                      <label> Compañia:  </label>
              <select class="custom-select" 
                      id="inputGroupSelect01"
                      name="compañia"
						          onChange={(e) => this.handleSelectCompañie(e)}
						          value={JSON.stringify(this.state.getCompañias)}>

						<option value={JSON.stringify({})}>Elija Compañia</option>
            { this.state.compañias.map((apiCompañia) => (
                            <option key={apiCompañia.id} value={JSON.stringify(apiCompañia.name)}>{apiCompañia.name}</option>
                        ))}
        			</select><br></br><br></br>


              <label> Pais:  </label>
              <select class="custom-select" 
                      id="inputGroupSelect01"
                      name="pais"
						          onChange={(e) => this.handleSelectCountry(e)}
						          value={JSON.stringify(this.state.getPaises)}>

						<option value={JSON.stringify({})}>Elija Pais</option>
                        { this.state.paises.map((apiPais) => (
                            <option key={apiPais.id} value={JSON.stringify(apiPais.name)}>{apiPais.name}</option>
                        ))}
        			</select><br></br><br></br>
            
              <label>
                Ciudad: 
              </label>
              <select class="custom-select" 
                      id="inputGroupSelect01"
                      name="ciudad"
						          onChange={(e) => this.handleSelectCity(e)}
						          value={JSON.stringify(this.state.getCiudades)} >
					    	<option value={JSON.stringify({})}>Elija Ciudad</option>
                  { this.state.ciudades.map((apiCiudad) => (
                  <option key={apiCiudad.id} value={JSON.stringify(apiCiudad.name)}>{apiCiudad.name}</option>
                        ))}
					</select><br></br><hr></hr>



          <button onClick={this.addPuesto}
                  type="submit" className="btn btn-primary m-2"
          >CARGAR</button><br></br><hr></hr>
         
          <div>
        </div>
        </div>
      </div>
      <div className="col-md-8">
         <ul className="list-group">
                {
                  this.state.puestos.map(apiPuesto => ( 
                 <li className="list-group-item list-group-item-action"
                  key={apiPuesto}
                  onDoubleClick ={() => this.deleteUser(apiPuesto.id)} 
                 >{apiPuesto.position} 
                    
                 
                 </li>))}
        </ul>
        </div>
    </div>
    )
  }
}
export default Puestos;