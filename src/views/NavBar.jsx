import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
    <p>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
 
            <Link className="navbar-brand" to="/">INICIO</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
		          	><span className="navbar-toggler-icon"></span>
		    	</button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                      <Link className="nav-link" to="/Companies">Compañias <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/Cities">Ciudades</Link>
                  </li>
                   <li className="nav-item">
                      <Link className="nav-link" to="/Countries">Paises</Link>
                  </li>
                  
              </ul>
              
            </div>

            </nav>
       

 
    </p>);
  }

 
}

export default NavBar;
