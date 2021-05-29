import React from 'react';
import axios from 'axios';
import {postData} from '../Clients/api';




class Cities extends React.Component {
  constructor(){
    super();
    this.state = {
      ciudad: '',
      pais: '',
      paises: [],
      ciudades: [],
      withError: false
  };
  }

  //AGREGAR ESTO
  async componentDidMount(){
    console.log(this.getCiudades());      
    console.log(this.getPaises());  
      
  }


  //FUNCIONA PERFECTO - AQUI TRAIGO 
  getCiudades = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/places/');
    this.setState({
      ciudades:  res.data
    })
    console.log(res)
  }
  //AGREGAR TAMBIEN UNO DE ESTOS
  getPaises = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/countries/');
    this.setState({
      paises:  res.data
    })
  }

  //FUNCIONA PERFECTO
  deleteUser = async (id) => {
    const response = window.confirm('¿ESTAS SEGURO DE ELIMINARLO? ⚠');
    if (response) {
        await axios.delete('https://api-fake-pilar-tecno.herokuapp.com/places/' + id);
        this.getCiudades();
    }
}

//CORREGIR ESTO
    AddCiudad = () => {
      
      let data = {name: this.state.ciudad , countrieId: this.state.pais}
      postData(data).then(res => this.setState({
        ciudades: [...this.state.ciudades, res]  
      
      }))

    }
    //     alert('ciudad agregada exitosamente!!!');
    //   });
    // } 

   handleCiudad = (e) => {
    this.setState({
     ciudad: e.target.value
   })
  }
  handleSelectCountry = (e) => {
		this.setState({
			pais: e.target.value
      
		});  
  }

  render() {
    return (
    <div className="container m-5">
      <div className="row">
        <div className="col m-5">

        {this.state.withError && <p>HUBO UN ERROR AL CONECTARSE</p>}

        <h1 align="center">AGREGAR CIUDAD</h1><hr></hr>
        <label>INGRESE CIUDAD:</label><br></br>
            <input type="text"
                    value={this.state.ciudad}
                    onChange={(e) => this.handleCiudad(e)}
                    placeholder="ingrese ciudad"></input><br></br><br></br>
          
          <label> PAIS:  </label>
              <select class="custom-select" 
                      id="inputGroupSelect01"
                      name="pais"
						          onChange={(e) => this.handleSelectCountry(e)}
						          value={JSON.stringify(this.state.getPaises)}>

						<option value={JSON.stringify({})}>Elija Pais</option>
                        { this.state.paises.map((apiPais) => (
                            <option key={apiPais} value={JSON.stringify(apiPais.name)}>{apiPais.name}</option>
                        ))}
        			</select><br></br><br></br>

          <button onClick={this.AddCiudad}
                  type="submit" className="btn btn-primary m-2"
          >CARGAR</button><br></br><hr></hr>
          <div>
        </div>
        </div>
      </div>
      <div className="col-md-8">
         <ul className="list-group">
                {
                  this.state.ciudades.map(apiCiudad => ( 
                 <li className="list-group-item list-group-item-action"
                  key={apiCiudad}
                  onDoubleClick ={() => this.deleteUser(apiCiudad.id)} 
                 >{apiCiudad.name}  
                 </li>))}
        </ul>
        </div>
    </div>
    )
  }
}
export default Cities;