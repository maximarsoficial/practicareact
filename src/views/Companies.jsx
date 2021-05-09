import React from 'react';

class Companies extends React.Component {
  constructor(){ 
    super()
    this.state = {
        compañias: [],
        newCompañia: '', 
      };
}

addCompañia = () => {
  let compañia = this.state.newCompañia;
  this.setState({
      compañias: [...this.state.compañias, compañia]
  });
}

handleNewCompañia = (e) => {
this.setState({
    newCompañia: e.target.value
})
}

  render() {
    return (
      <>
           <div className="container m-5">
      <div className="row">

        <div className="col m-5">
        <h1 align="center">AREGAR COMPAÑIA</h1><hr></hr>
        <label>INGRESE COMPAÑIA</label><br></br>

          <input type="text" placeholder="ingrese compañia" value={this.state.newCompañia} onChange={(e) => this.handleNewCompañia(e)} ></input><br></br>
          <button className="btn btn-primary m-2" onClick={this.addCompañia}>CARGAR</button><hr></hr>
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
