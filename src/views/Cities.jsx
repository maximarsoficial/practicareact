import React from 'react';
import axios from 'axios';

class Cities extends React.Component {
  constructor(){
    super();
    this.state = {
      ciudad: '',
      ciudades: [],
      withError: false
  };
  }
  async componentDidMount(){
    console.log(this.getCiudades());                      
  }

  //FUNCIONA PERFECTO - AQUI TRAIGO 
  getCiudades = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/places/');
    this.setState({
      ciudades:  res.data
    })
    console.log(res)
  }

  
    handleSubmit = async e => {
      e.preventDefault()
    try {
      let config = {
        method: 'post',
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(this.state.ciudad)
      
        
    }
        
        let res = await fetch('https://api-fake-pilar-tecno.herokuapp.com/places/', config)
        let json = await res.json()
        console.log(json)
  
    } catch (err) {
        console.error(err)
        
    }
};

//FUNCIONA PERFECTO
  deleteUser = async (id) => {
    const response = window.confirm('are you sure you want to delete it?');
    if (response) {
        await axios.delete('https://api-fake-pilar-tecno.herokuapp.com/places/' + id);
        this.getCiudades();
    }
}


   addCiudad = () => {
     let ciudad = this.state.ciudad;
     console.log(ciudad);
       this.setState({
           ciudades: [...this.state.ciudades, ciudad]
       });
  }
   handleCiudad(e){
    this.setState({
     ciudad: e.target.value
   })
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
                    onSubmit= {(e) => this.handleSubmit(e)}
                    placeholder="ingrese ciudad"></input><br></br>
          <button onClick={this.handleSubmit}
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
                  key={apiCiudad.id}
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