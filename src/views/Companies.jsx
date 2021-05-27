import React from 'react';
import axios from 'axios'


class Companies extends React.Component {
  constructor(){
    super()
    this.state = {
        compañia: '',
        compañias: []
      };
}
async componentDidMount(){
  console.log(this.getCompañias());                      
}

//FUNCIONA PERFECTO - AQUI TRAIGO 
getCompañias = async () => {
  const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/organizations/');
  this.setState({
    compañias:  res.data
  })
  console.log(res)
}

  //FUNCIONA PERFECTO
  deleteUser = async (id) => {
    const response = window.confirm('are you sure you want to delete it?');
    if (response) {
        await axios.delete('https://api-fake-pilar-tecno.herokuapp.com/organizations/' + id);
        this.getCompañias();
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
                 value={this.state.getCompañias}
                 onChange={(e) => this.handleNewCompañia(e)} ></input><br></br>
          <button className="btn btn-primary m-2"
          onClick={this.addCompañia}>CARGAR</button><hr></hr><br></br>
          
        </div>
      </div>
      <div className="col-md-8">
         <ul className="list-group">
                {
                  this.state.compañias.map(apiCompañia => ( 
                 <li className="list-group-item list-group-item-action"
                  key={apiCompañia.id}
                  onDoubleClick ={() => this.deleteUser(apiCompañia.id)} 
                 >{apiCompañia.name} 
                    
                 
                 </li>))}
        </ul>
        </div>
    </div>
      </>
    );
  }
}
export default Companies;