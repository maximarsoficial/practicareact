import React from 'react';
import Job from '../components/Job';
import NewJobForm  from "../components/NewJobForm";



class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [  
     {name: "frontend js",company: "ABC",city: "La Rioja",country: "Argentina" },
     {name: "frontend js",company: "ABC",city: "Mendoza",country: "Argentina" },
     {name: "frontend js",company: "ABC",city: "Cordoba",country: "Argentina" } 
      ]      
    }; 
  }

  onNewJob = (evt, newJob) => { 
    this.setState({
    jobs: [...this.state.jobs, newJob]
      });
  }

  
  deleteJob = (id) => {
      this.setState({
        jobs: this.state.jobs.filter((job, idx) => idx !== id)
      });
       
  }

  render() {
    return (
        <div>
        <NewJobForm onNewJobSubmit={this.onNewJob}></NewJobForm>
            <ul>
                {this.state.jobs.map((job, idx) => {
                    return <Job key={idx} elem={job} onDelete={() => this.deleteJob(idx)}></Job>                     
                })}
            </ul>
        </div>
    );
  }

  componentDidMount() {}
}
export default Jobs;

