import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';



export class MainView extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dbAPI: [],
      db: '',
  }
}
  
 
 
  async componentDidMount(){
    console.log(this.getdb());                      
  }

  //FUNCIONA PERFECTO - AQUI TRAIGO 
  getdb = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/db/');
    this.setState({
      dbAPI:  res.data
    })
    console.log(res)
  }

  //FUNCIONA PERFECTO
  deleteData = async (id) => {
    const response = window.confirm('¿ESTAS SEGURO DE ELIMINARLO?');
    if (response) {
        await axios.delete('https://api-fake-pilar-tecno.herokuapp.com/db/' + id);
        this.getdb();
    }
}

  render(){
    return(
      <>
      <div><br></br><br></br><br></br>
      <div className="container-fluid">
      </div>
       
      <div className="col-md-8">
         <ul className="list-group">
              <h1>----------------------------------------------------------------</h1>
              <h1>----------------------------------------------------------------</h1>
              <h1>----------------------------------------------------------------</h1>
              <h1>----------------------------------------------------------------</h1>
              <h1>----------------------------------------------------------------</h1>
              <h1>----------------------------------------------------------------</h1>
              <h1>----------------------------------------------------------------</h1>

        </ul>
        </div>
         
         
          </div>
      </>
    );
  }
}