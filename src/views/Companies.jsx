import React from 'react';


class Companies extends React.Component {
  constructor(){
    super()
    this.state = {
        compañia: '',
        compañias: []
      };
}
componentDidMount(){
  if(localStorage.getItem("compañias") != null){
    this.setState({
      compañias: JSON.parse(localStorage.getItem("compañias"))
          })
  }
}
addCompañia = () => {
  let compañia = this.state.compañia;
  this.setState({
      compañias: [...this.state.compañias, compañia]
  });
}
handleNewCompañia(e){
  this.setState({
    compañia: e.target.value
  })
}
saveData= () => {
  window.localStorage.setItem("compañias", JSON.stringify(this.state.compañias))
}
  render() {
    return (
      <>
           <div className="container m-5">
      <div className="row">
        <div className="col m-5">
        <h1 align="center">AGREGAR COMPAÑIA</h1><hr></hr>
        <label>INGRESE COMPAÑIA</label><br></br>
          <input type="text"
                 placeholder="ingrese compañia"
                 value={this.state.compañia}
                 onChange={(e) => this.handleNewCompañia(e)} ></input><br></br>
          <button className="btn btn-primary m-2"
          onClick={this.addCompañia}>CARGAR</button><hr></hr><br></br>
          <button onClick={this.saveData}
                  type="submit" className="btn btn-warning m-2"
          >GUARDAR</button><br></br><hr></hr>
        </div>
      </div>
      <ul>
                {this.state.compañias.map((elem, idx) => {return <li key={idx}>{elem}</li>})}
        </ul>
    </div>
      </>
    );
  }
}
export default Companies;