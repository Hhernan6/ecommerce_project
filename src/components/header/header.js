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
        <div className="logoContainer logoContainer--mainNav ">
          <p>Groove</p> 
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {auth0Client.isAuthenticated() ? (
           <li>
             <Link to ="/admin/products"> Admin</Link>
           </li>
          ): null}
          
        </ul>
        <div className="mainNav__side">
        
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


        </div>
      </nav>
    </header>
  );
};

export default withRouter(header);
