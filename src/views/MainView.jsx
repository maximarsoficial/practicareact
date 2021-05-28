import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AddModal } from '../components/AddModal';
import axios from 'axios';



export class MainView extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    data: [],
    datas: '' ,
    
    modalInsertar: false,
    form: {
      puesto: "",
      compañia: "",
      ciudad: "",
      pais: "", 
    },
  };
  
  this.insertar = this.insertar.bind(this)
  }
 
 
 
  //cambio el estado del modal CREAR para mostrarlo
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: !this.state.modalInsertar,
    });
  };
 
  // cierro los modales
  cerrarModal = () => {
    this.setState({ 
        modalInsertar: false
    });
  };


 
  //funcion para BORRAR registro
  eliminar = (dato) => {
    var opcion = window.confirm("¿Estás Seguro de eliminarlo?");
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.forEach((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
      var lista2=this.state.data;
      var contador2=1;
      lista2.forEach((registro) => {
        registro.id=contador2;
        contador2++;
      })
      this.setState({data: lista2});
    }
  };
  //Funcion para CREAR nuevo registro
  insertar= (puesto)=>{
    var lista= this.state.data;
    this.setState({
      data:[...lista,puesto]
    })
    this.setState({ modalInsertar: false});
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  async componentDidMount(){
    console.log(this.getData());                      
  }

  //FUNCIONA PERFECTO - AQUI TRAIGO 
  getData = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/db/');
    this.setState({
      datas:  res.data
    })
    console.log(res)
  }

  //FUNCIONA PERFECTO
  deleteData = async (id) => {
    const response = window.confirm('¿ESTAS SEGURO DE ELIMINARLO?');
    if (response) {
        await axios.delete('https://api-fake-pilar-tecno.herokuapp.com/db/' + id);
        this.getData();
    }
}

  render(){
    return(
      <>
      <div><br></br><br></br><br></br>
      <div className="container-fluid">
      <button className="btn btn-success" onClick={()=>this.mostrarModalInsertar()}><h1>--Click aqui para crear un Puesto--</h1></button><hr></hr>
      </div>
        { 
          this.state.modalInsertar 
          ? <AddModal 
                cerrarModal={this.cerrarModal} 
                insertarPuesto = {this.insertar}
                data={this.state.data}
            /> 
          : null }
         
        
          <tbody>
            {this.state.data.map((dato,index)=>(
              <ul key={index}>
                <label>PUESTO:</label> <lo>{dato.puesto}</lo><br></br>
                <label>Compañia:</label> <lo>{dato.compañia}</lo><br></br>
                <label>Ciudad:</label><lo>{dato.ciudad}</lo><br></br>
                <label>Pais:</label><lo>{dato.pais}</lo>
                <td>
                
                    <button className="btn btn-danger" onClick={()=> this.eliminar(dato)}>Eliminar</button>
                </td>
              </ul>
            ))}
          </tbody>
         
         
          </div>
      </>
    );
  }
}