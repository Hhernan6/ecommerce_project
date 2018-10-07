import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../../Auth';
// const aux = (props) => props.children;

// export default aux;
const header = props => {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };
  return (
    <header>
      <nav className="mainNav">
  
          <p className="mainNav-logo">Groove</p> 
      
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="mainNav__links--border">
            <Link to="/product">Products</Link>
          </li>
          <li className="mainNav__links--border">
            <Link to="/contact">Contact</Link>
          </li>
          {auth0Client.isAuthenticated() ? (
           <li className="mainNav__links--border">
             <Link to ="/admin/products"> Admin</Link>
           </li>
          ): null}
          
        </ul>
      
        
          {!auth0Client.isAuthenticated() && (
            <button onClick={auth0Client.signIn}>
              Sign In
            </button>
          )}
             {auth0Client.isAuthenticated() && (
          <div>
           
            <button
              className="btn"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}


     
      </nav>
    </header>
  );
};

export default withRouter(header);
