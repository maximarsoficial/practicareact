import React from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Companies from "./views/Companies";
import Countries from "./views/Countries";
import NavBar from './views/NavBar';
import NotFoundView from './views/NotFoundView';
import Cities from './views/Cities';
import { MainView } from './views/MainView';
import Puestos from './views/Puestos'

 class App extends React.Component {

  render(){
    return(
      <> 
            <Router>  
             <NavBar></NavBar> 
            <Switch>
                <Route path="/" exact component={MainView}></Route>
                <Route path="/puestos" exact  component={Puestos}></Route>
                <Route path="/companies" exact  component={Companies}></Route>
                <Route path="/countries" exact component={Countries} ></Route>
                
                <Route path="/Cities"  exact component={Cities} />


                <Route component={NotFoundView}></Route>
            </Switch>
          </Router>
      
       
    </>
    );
}
}
export default App;

