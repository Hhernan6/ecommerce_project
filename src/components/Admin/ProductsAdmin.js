import React from "react";
import { Link, withRouter } from "react-router-dom";
import AdminCards from "./AdminCards/AdminCards";

const Admin = props => {
  const deleteFunc = id => {
    fetch(`http://localhost:3007/products/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
    .catch((error) => {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
    window.location.reload();
  };

  const toggleModal = ID => {
    const modal = document.getElementById(`${ID}`);
    if (modal.style.display === "none" || modal.style.display === '') {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
    }
  };

  return (
    <main>
      <h1 className="main-heading">Products Manager</h1>
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
          <li className="main-nav__links--border">
            <Link to="/admin/Contact">Contact</Link>
          </li>
        </ul>
        <button onClick={() => toggleModal("add-modal")}>
          Add product
        </button>
      </nav>
      <div className="add-product-modal" id="add-modal">
        <form
          className="modal-form"
          method="POST"
          action="http://localhost:3007/products/"
        >
          <div className="contact__inputs">
            <label htmlFor="title">Name</label>
            <input type="text" id="productName" name="title" />
          </div>
          <div className="contact__inputs">
            <label htmlFor="productImage">Image URL</label>
            <input type="text" id="productImage" name="productImage" />
          </div>
          <div className="contact__inputs">
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" />
          </div>
          <div className="contact__inputs">
            <label htmlFor="brand">Brand</label>
            <input type="text" id="brand" name="brand" />
          </div>
          <div className="contact__inputs">
            <label htmlFor="ProductType">ProductType</label>
            <input type="text" id="ProductType" name="productType" />
          </div>
          <div className="contact__inputs">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" />
          </div>
          <div className="modal-form__buttons">
            <input type="submit" value="Submit" className="modal-form__buttons--green"/>
            <button onClick={() => toggleModal("add-modal")}type="button" className="modal-form__buttons--black" >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="admin-cards-wrapper">
  
        {props.products.map(cardsList => {
          return (
            <AdminCards
              key={cardsList.productID}
              title={cardsList.title}
              description={cardsList.description}
              price={cardsList.price}
              image={cardsList.productImage}
              objectID={cardsList.productID}
              deleteProduct={deleteFunc}
              productType={cardsList.productType}
              brand={cardsList.brand}
              toggle={toggleModal}
            />
          );
        })}
      </div>
    </main>
  );
};

export default withRouter(Admin);
