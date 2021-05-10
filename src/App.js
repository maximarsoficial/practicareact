import React from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Inicio from './views/Inicio';
import Companies from "./views/Companies";
import Countries from "./views/Countries";
import NavBar from './views/NavBar';
import NotFoundView from './views/NotFoundView';
import Cities from './views/Cities';

 class App extends React.Component {

  render(){
    return(
      <> 
            <Router>  
            <NavBar></NavBar>  
            <Switch>
                <Route path="/" exact component={Inicio}></Route>
                <Route path="/companies" exact  component={Companies}></Route>
                <Route path="/countries" exact component={Countries} ></Route>
                <Route path="/cities" exact component={Cities} ></Route>


                <Route component={NotFoundView}></Route>
            </Switch>
          </Router>
      
       
    </>
    );
}
}
export default App;

