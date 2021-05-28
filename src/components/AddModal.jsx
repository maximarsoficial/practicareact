import React from 'react';
import axios from 'axios';





export class AddModal extends React.Component {
  constructor(props){
      
      super(props)
      this.props = props
      this.handleChange = this.handleChange.bind(this);
      this.insertarPuesto = this.insertarPuesto.bind(this);
      this.state={
          datas: '',
          puesto: "",
          compañia: "",
          ciudad: "",
          pais: "", 
          data: [],
          puestos: [],
          paises: [],
          ciudades: [], 
          compañias: []
      }
      
      
  };

  
  async componentDidMount(){
    console.log(this.getData());
    console.log(this.getPuestos());    
    console.log(this.getCiudades());    
    console.log(this.getPaises());  
    console.log(this.getCompañias());                     
                  
  }

  getData = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/db/');
    this.setState({
      datas:  res.data
    })
  }
  getPuestos = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/jobs/');
    this.setState({
      puestos:  res.data
    })
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

  handleChange (e){
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    })
  }
  handleData = (e) => {
		e.preventDefault();
		this.setState({
			data: JSON.parse(e.target.value),
      
		});  
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
  handleSelectCompañie = (e) => {
		e.preventDefault();
		this.setState({
			compañia: JSON.parse(e.target.value)
      
		});  
  }

  insertarPuesto(){
    this.props.insertarPuesto(this.state);
  }
  
  render(){
    return(
        <>
      
           
      <h1>Insertar Puesto</h1><br></br>

              <label> Puesto: </label>
              <select class="custom-select" 
                      id="inputGroupSelect01"
                      name="puesto"
						          onChange={(e) => this.handleSelectPuesto(e)}
						          value={JSON.stringify(this.state.getPuestos)}>

						<option value={JSON.stringify({})}>Elija un puesto</option>
            { this.state.puestos.map((apiPuesto) => (
                            <option key={apiPuesto.id} value={JSON.stringify(apiPuesto.position)}>{apiPuesto.position}</option>
                        ))}
        			</select><br></br><br></br>
           
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
          
         
          
            <button className="btn btn-primary" onClick={this.insertarPuesto}>
              Insertar
            </button>
            <button className="btn btn-danger" onClick={this.props.cerrarModal}>
              Cancelar
            </button><br></br><br></br>

          
       
        </>
    )
  }
}  