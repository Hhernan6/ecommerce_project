import React from "react";
import { Link, withRouter } from "react-router-dom";

const AdminHeader = (props) => {
  return (
    <header>
    <nav className="admin-Nav">
    <ul> 
      <li className="mainNav__links--border">
        <Link to="/admin/products">Products</Link>
      </li>
      <li>
        <Link to="/admin/Contact">Contact</Link>
      </li>
      </ul>
      <button onClick={props.showModal}>Add product</button>
   
    </nav>
    </header>
  );
};


export default withRouter(AdminHeader);