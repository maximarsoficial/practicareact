import React from 'react';

class Cities extends React.Component {
  constructor(){
    super();
    this.state = {
      ciudad: '',
      ciudades: [],
  };
  }
  componentDidMount(){
    if(localStorage.getItem("ciudades") != null){
      this.setState({
        ciudades: JSON.parse(localStorage.getItem("ciudades"))
            })
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
    console.log(e.target.value)
    this.setState({
      ciudad: e.target.value
    })
  }
  saveData= () => {
    window.localStorage.setItem("ciudades", JSON.stringify(this.state.ciudades))
  }
  render() {
    return (
    <div className="container m-5">
      <div className="row">
        <div className="col m-5">
        <h1 align="center">AGREGAR CIUDAD</h1><hr></hr>
        <label>INGRESE CIUDAD:</label><br></br>
            <input type="text"
                    value={this.state.ciudad}
                    onChange={(e) => this.handleCiudad(e)}
                    placeholder="ingrese ciudad"></input><br></br>
          <button onClick={this.addCiudad}
                  type="submit" className="btn btn-primary m-2"
          >CARGAR</button><br></br><hr></hr>
          <button onClick={this.saveData}
                  type="submit" className="btn btn-warning m-2"
          >GUARDAR</button><br></br><hr></hr>
          <div>
        </div>
        </div>
      </div>
         <ul>
                {this.state.ciudades.map((ciudad, idx) => {return <li key={idx}>{ciudad}</li>})}
        </ul>
    </div>
    )
  }
}
export default Cities;