import React from "react";

import { Link, withRouter } from "react-router-dom";
import AdminContactCards from "../AdminContactCards/AdminContactCards";
const contactAdmin = props => {
  return (
    <main>
      <nav className="admin-Nav">
        <ul>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
          <li className="mainNav__links--border">
            <Link to="/admin/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="contactRow">
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
