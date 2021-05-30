import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';



export class MainView extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      db: [],
  }
}
  
 
 
  async componentDidMount(){
    console.log(this.getdb());                      
  }

  //FUNCIONA PERFECTO - AQUI TRAIGO 
  getdb = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/db/');
    this.setState({
      db:  res.data
    })
    console.log(res)
  }

  //FUNCIONA PERFECTO
  deletedb = async (id) => {
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
           
         <div className="container">
         <h4>CON DOBLE CLICK PUEDE ELIMINARLO</h4><hr></hr><br></br>

            <table className="table table-hover table-dark">
            <thead className="">
                <tr>
                         
               
                    <th>PUESTO</th>
                    <th>COMPAÑIA</th>
                    <th>CIUDAD</th>
                    <th>PAIS</th>

                </tr>
            </thead>

            <tbody  >

        
              
            </tbody>
        </table>
        </div>

        </ul>
        </div>
         
         
          </div>
      </>
    );
  }
}