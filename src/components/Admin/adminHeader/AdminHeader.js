import React from "react";
import { Link, withRouter } from "react-router-dom";

const AdminHeader = () => {
  return (
    <nav className="admin-Nav">
      <li>
        <Link to="/admin/products">Products</Link>
      </li>
      <li>
        <Link to="/admin/Contact">contact Info</Link>
      </li>
    </nav>
  );
};


export default withRouter(AdminHeader);