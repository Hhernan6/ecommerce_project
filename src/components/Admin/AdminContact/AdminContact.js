import React from "react";

import { Link, withRouter } from "react-router-dom";
import AdminContactCards from "../AdminContactCards/AdminContactCards";
const contactAdmin = props => {
  return (
    <main>
      <h1 className="main-heading">Contact Admin</h1>
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
          <li className="main-nav__links--border">
            <Link to="/admin/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="contact-row margin-auto">
        {props.contactInfo.map(cardsList => {
          return (
            <AdminContactCards
              key={cardsList.comments}
              firstName={cardsList.firstName}
              lastName={cardsList.lastName}
              email={cardsList.email}
              phoneNum={cardsList.phoneNum}
              comments={cardsList.comments}
              // openModal={showModal}
            />
          );
        })}
      </div>
    </main>
  );
};

export default withRouter(contactAdmin);
