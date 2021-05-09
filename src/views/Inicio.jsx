import React from 'react';

class Inicio extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
        <>
  <div className="container m-5">
      <div className="row">

        <div className="col m-5">
        <h1 align="center">CARGAR PLANILLA </h1><hr></hr>

          <label>INGRESE NOMBRE</label><br></br>
          <input type="text" placeholder="ingrese Nombre"></input><br></br><br></br>

          <label>SELECCIONE EMPRESA</label><br></br>
          <select></select><br></br>

          <label>SELECCIONE CIUDAD</label><br></br>
          <select></select><br></br>
          
          <label>SELECCIONE PAIS</label><br></br>
          <select></select>
        </div>
      </div>
      <div className="container-fluid">
            <div className="col border">
            <button className="btn btn-primary m-2">CARGAR</button>

            </div>
      </div>
    </div><hr></hr>

        <div className="container">
            <div className="row">
                <div className="col border">
                <h1 align="center">LISTA CARGADA </h1><hr></hr>

                </div>
            </div>
        </div>
        </>




    ) 
    ;
  }

 
}

export default Inicio;
