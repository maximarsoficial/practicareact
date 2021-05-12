import React from 'react';

class Countries extends React.Component {
 
  constructor(){ 
    super()
    this.state = {
        paises: [], 
      };
}
componentDidMount(){
  if(localStorage.getItem("paises") != null){
    this.setState({
      paises: JSON.parse(localStorage.getItem("paises"))
          })
  }
}
AddPais = () => {
  let pais = this.state.newPais;
  this.setState({
      paises: [...this.state.paises, pais]
  });
}

handleNewPais = (e) => {
this.setState({
  paises: e.target.value
})
}
saveData= () => {
  window.localStorage.setItem("paises", JSON.stringify(this.state.paises))
}

  render() {
    return  <div className="container m-5">
    <div className="row">

      <div className="col m-5">
      <h1 align="center">AGREGAR PAIS</h1><hr></hr>
      <label>INGRESE PAIS:</label><br></br>

        <input type="text" 
        value={this.state.newPais} 
        onChange={(e) => this.handleNewPais(e)} 
        placeholder="ingrese pais"></input><br></br>

        <button className="btn btn-primary m-2" onClick={this.AddPais}>CARGAR</button><hr></hr>
        <button onClick={this.saveData}  
                  type="submit" className="btn btn-warning m-2" 
          >GUARDAR</button><br></br><hr></hr>
      </div>
    </div>
    {/* <ul>
                {this.state.paises.map((elem, idx) => {return <li key={idx}>{elem}</li>})}
        </ul> */}
  </div>
  }

}

export default Countries;
