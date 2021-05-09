import React from 'react';

class Cities extends React.Component {
  constructor(){
    super();
    this.state = {
      
      ciudades: [],
      newCiudad: ''
  };
  }
  
  addCiudad = () => {
    let ciudad = this.state.newCiudad;
      this.setState({
          ciudades: [...this.state.ciudades, ciudad]
      });
  }
 
  handleCiudad(e){
    this.setState({
      newCiudad: e.target.value
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
        <h1 align="center">AREGAR CIUDAD</h1><hr></hr>
        <label>INGRESE CIUDAD:</label><br></br>
          <input type="text" value={this.state.newCiudad} onChange={(e) => this.handleCiudad(e)} placeholder="ingrese ciudad"></input><br></br>


          <button onClick={this.addCiudad} saveData= {this.saveData.ciudades} type="submit" className="btn btn-primary m-2"  >CARGAR</button><br></br><hr></hr>
          <div>
          
        </div>
        </div>
        
      </div>
      <ul>
                {this.state.ciudades.map((elem, idx) => {return <li key={idx}>{elem}</li>})}
        </ul>
    </div>
    
    )
  }


}

export default Cities;
