import React from 'react'
import {checkValue} from '../utils/stringUtils'

export class ToDoForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            bussiness: "",
            place: "",
            country: "",
        };
        this.handleInput = this.handleInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInput(e){
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    }

    submit(e){
        e.preventDefault()

        if(
            checkValue(this.state.name) &&
            checkValue(this.state.bussiness) &&
            checkValue(this.state.country) &&
            checkValue(this.state.place) 
        ){

           const offer = {

            name: this.state.name,
            bussiness: this.state.bussiness,
            country: this.state.country,
            place: this.state.place
           }
           this.props.onSubmit(offer)

           this.setState({
               name: "",
               bussiness: "",
               place: "",
               country: "",
           })
        }else{
            alert("faltan completar campos*")
        }
    }

    render(){
        return(
<div class="container mb-5">
  <div className="row mb-5">
  <div className="col-12 border">

  
            <form className="form-group" onSubmit={(e) => this.submit(e)}>
                <input type= "text" name="name" className="form-control"
                placeholder=" nombre del puesto*"
                onChange={(e) => this.handleInput(e)}
                value={this.state.name}/> <br></br>

                <input type= "text" name="bussiness" className="form-control"
                placeholder=" nombre del empresa*"
                onChange={(e) => this.handleInput(e)}
                value={this.state.bussiness}/> <br></br>

                <input type= "text" name="place" className="form-control"
                placeholder="Ingresa ciudad*"
                onChange={(e) => this.handleInput(e)}
                value={this.state.place}/> <br></br>
                
                <input type= "text" name="country" className="form-control"
                placeholder="Ingresa pais*"
                onChange={(e) => this.handleInput(e)}
                value={this.state.country}/> <br></br>

                <button type="submit" className="btn btn-primary btn-block">AGREGAR</button>

            </form>
            </div>
            </div>
            </div>
            
            
        );
    }

 }




