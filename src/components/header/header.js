import {Link} from 'react-router-dom';
import React from 'react';

// const aux = (props) => props.children;

// export default aux;
const header = () => {
    return (
        <header>
           <nav className="mainNav">
            <div className="mainNav__logoContainer">
                    <p>Groove</p>
                    <div className="mainNav__logo"></div>
               </div>
               <ul>    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
               </ul>
               <div className="mainNav__side">
               <div className="mainNav__search"></div>
                   <button>Log In</button>
                   <button>Sign up</button> 
               </div>

           </nav>
       </header>
    );
}

export default header