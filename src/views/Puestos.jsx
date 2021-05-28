import React from 'react';
import axios from 'axios';

class Puestos extends React.Component {
  constructor(){
    super();
    this.state = {
      puesto: '',
      puestos: [],
      withError: false
  };
  }
  async componentDidMount(){
    console.log(this.getPuestos());  
    axios.post('https://api-fake-pilar-tecno.herokuapp.com/jobs', 
    {
    "name": 'sss',
    "countrieId": 4 ,
    
  }).then(res => console.log(res))
                          
  }

  //FUNCIONA PERFECTO - AQUI TRAIGO 
  getPuestos = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/jobs/');
    this.setState({
      puestos:  res.data
    })
    console.log(res)
  }



//FUNCIONA PERFECTO
  deleteUser = async (id) => {
    const response = window.confirm('are you sure you want to delete it?');
    if (response) {
        await axios.delete('https://api-fake-pilar-tecno.herokuapp.com/jobs/' + id);
        this.getPuestos();
    }
}


   addPuesto = () => {
     let puesto = this.state.puesto;
     console.log(puesto);
       this.setState({
        puestos: [...this.state.puestos, puesto]
       });
  }
   handlePuesto(e){
    this.setState({
        puesto: e.target.value
   })
  }

  render() {
    return (
    <div className="container m-5">
      <div className="row">
        <div className="col m-5">

        {this.state.withError && <p>HUBO UN ERROR AL CONECTARSE</p>}

        <h1 align="center">AGREGAR PUESTO</h1><hr></hr>
        <label>INGRESE PUESTO:</label><br></br>
            <input type="text"
                    value={this.state.puesto}
                    onChange={(e) => this.handlePuesto(e)}
                    placeholder="ingrese puesto"></input><br></br>
          <button onClick={this.addPuesto}
                  type="submit" className="btn btn-primary m-2"
          >CARGAR</button><br></br><hr></hr>
         
          <div>
        </div>
        </div>
      </div>
      <div className="col-md-8">
         <ul className="list-group">
                {
                  this.state.puestos.map(apiPuesto => ( 
                 <li className="list-group-item list-group-item-action"
                  key={apiPuesto.id}
                  onDoubleClick ={() => this.deleteUser(apiPuesto.id)} 
                 >{apiPuesto.position} 
                    
                 
                 </li>))}
        </ul>
        </div>
    </div>
    )
  }
}
export default Puestos;