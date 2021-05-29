import React from 'react';
import axios from 'axios'
import {postData} from '../Clients/api';

class Countries extends React.Component {
  constructor(){
    super()
    this.state = {
        pais: '',
        paises: [],
        
      };
}

      async componentDidMount(){
        console.log(this.getPaises());      
        axios.post('https://api-fake-pilar-tecno.herokuapp.com/countries', 
        {
        "name": '',
        
        
      }).then(res => console.log(res))
                          
      }

      getPaises = async () => {
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/countries/');
        this.setState({
          paises:  res.data
        })
        console.log(res)
      }
      deleteUser = async (id) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('https://api-fake-pilar-tecno.herokuapp.com/countries/' + id);
            this.getPaises();
        }
      }

        AddPais = () => {
          let pais = this.state.pais;
          let data = {name: pais, } //countrieId:  pais
          postData("countries", data).then(res => {
            this.setState({
              paises: [...this.state.paises, res.data],
            });
            alert('País agregado exitosamente!!!');
          });
        }
        handleNewPais = (e) => {
        this.setState({
          pais: e.target.value
        })
        }

  render() {
    return ( 
    <div className="container m-5">
    <div className="row">
      <div className="col m-5">
      <h1 align="center">AGREGAR PAIS</h1><hr></hr>

      <label>INGRESE PAIS:</label><br></br>
        <input type="text"
        value={this.state.pais}
        onChange={(e) => this.handleNewPais(e)}
       
        placeholder="ingrese pais"></input><br></br>
        <button className="btn btn-primary m-2" onClick={this.AddPais}>CARGAR</button><hr></hr>
      </div>
    </div>
    <div className="col-md-8">
         <ul className="list-group">
                {
                  this.state.paises.map(apiPais => ( 
                 <li className="list-group-item list-group-item-action"
                  key={apiPais}
                  onDoubleClick ={() => this.deleteUser(apiPais.id)} 
                 >{apiPais.name} 
                 </li>))}
        </ul>
        </div>
  </div>
    )
  }
}

export default Countries;