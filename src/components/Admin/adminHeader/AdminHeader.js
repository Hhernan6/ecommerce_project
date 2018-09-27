import React from "react";
import { Link, withRouter } from "react-router-dom";

const AdminHeader = () => {
  return (
    <nav className="admin-Nav">
      <li>
        <Link to="/admin">Products</Link>
      </li>
      <li>
        <Link to="/AdminContact">Form</Link>
      </li>
    </nav>
  );
};


export default withRouter(AdminHeader);