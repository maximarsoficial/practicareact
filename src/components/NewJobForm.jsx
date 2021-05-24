import React from 'react';

class NewJobForm extends React.Component {
  constructor() {
    super();
    this.state = {
        newJob: {
            name: '',
            company: '',
            city: '',
            country: 'ARGENTINA'
        }
    };
  }

  handleNewJobName = (evt) => {
    this.setState( prevState => ({
        newJob: {
            ...prevState.newJob,
            name : evt.target.value
        }
    })
    );
  }
  handleNewJobCompany = (evt) => {
    this.setState( prevState => ({
        newJob: {
            ...prevState.newJob,
            company : evt.target.value
        }
    })
    );
  }
  handleNewJobCity = (evt) => {
    this.setState( prevState => ({
        newJob: {
            ...prevState.newJob,
            city : evt.target.value
        }
    })
    );
  }
  handleNewJobCountry = (evt) => {
    this.setState( prevState => ({
        newJob: {
            ...prevState.newJob,
            country : evt.target.value
        }
    })
    );
  }
  handleNewJobSubmit = (evt) => {
    evt.preventDefault(); 
    if( this.state.newJob.name.trim() === '' ||
        this.state.newJob.company.trim() === '' ||
        this.state.newJob.city.trim() === '' ||
        this.state.newJob.country.trim() === '' 
        ){return false;}
    this.props.onNewJobSubmit(evt, this.state.newJob)
  }

  render() {
    return (
        <form onSubmit={this.handleNewJobSubmit}>
        <label>NOMBRE:</label>
        <input type= "text" required value= {this.state.newJob.name} onChange= {(e) => this.handleNewJobName(e)}></input>
        <label>COMPAÑIA:</label>
        <input type= "text" required value= {this.state.newJob.company} onChange= {(e) => this.handleNewJobCompany(e)}></input>
        <label>CIUDAD:</label>
        <input type= "text" required value= {this.state.newJob.city} onChange= {(e) => this.handleNewJobCity(e)}></input>
        <label>PAIS:</label>
        <input type= "text" required value= {this.state.newJob.country} onChange= {(e) => this.handleNewJobCountry(e)}></input>
        <button type="submit">AGREGAR</button>
        </form>
    );
  }

  componentDidMount() {}
}

export default NewJobForm;
