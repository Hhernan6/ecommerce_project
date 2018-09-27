import React from "react";

import AdminCards from "./AdminCards/AdminCards";
import AdminHeader from "./adminHeader/AdminHeader"
const Admin = props => {
  return (
    
    <main>
      <AdminHeader />
      <div className="name-card">
        <ul>
          <li>Name</li>
          <li>ID</li>
          <li>Price</li>
          <li>Description</li>
          <li>Image</li>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      </div>
      <div className="admin-cards">
        {props.products.map(cardsList => {
          return (
            <AdminCards
              key={cardsList.title}
              title={cardsList.title}
              description={cardsList.description}
              price={cardsList.price}
              image={cardsList.productImage}
              objectID= {cardsList._id}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Admin;
