import React from 'react';

class Countries extends React.Component {
 
  constructor(){ 
    super()
    this.state = {
        paises: [],
        newPais: '', 
      };
}

AddPais = () => {
  let pais = this.state.newPais;
  this.setState({
      paises: [...this.state.paises, pais]
  });
}

handleNewPais = (e) => {
this.setState({
    newPais: e.target.value
})
}

  render() {
    return  <div className="container m-5">
    <div className="row">

      <div className="col m-5">
      <h1 align="center">AGREGAR PAIS</h1><hr></hr>
      <label>INGRESE PAIS:</label><br></br>
        <input type="text" value={this.state.newPais} onChange={(e) => this.handleNewPais(e)} placeholder="ingrese pais"></input><br></br>
        <button className="btn btn-primary m-2" onClick={this.AddPais}>CARGAR</button><hr></hr>
      </div>
    </div>
    <ul>
                {this.state.paises.map((elem, idx) => {return <li key={idx}>{elem}</li>})}
        </ul>
  </div>
  }

}

export default Countries;
