import React from "react";
import { Link, withRouter } from "react-router-dom";
import AdminCards from "./AdminCards/AdminCards";


const Admin = props => {
 
  const showAddProductModal = () => {
    let modal2 = document.querySelector(".modal2");
    if (modal2.style.display === "none" || modal2.style.display === "") {
      modal2.style.display = "flex";
    } else {
      modal2.style.display = "none";
    }
  };

  const deleteFunc = (ID) => { 
    fetch(`http://localhost:3007/products/${ID}` , {
      method: 'delete'
    })
    .then(response => response.json())
   window.location.reload();
  
  } 

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
      <button onClick={showAddProductModal}>Add product</button>
   
    </nav>
      <div className="modal2">
        
        <form className="modalForm" method="POST" action="http://localhost:3007/products">
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
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" />
          </div>
          <div className="contact__inputs">
            <label htmlFor="brand">Brand</label>
            <input type="text" id="brand" name="brand" />
          </div>
          <div className="contact__inputs">
            <label htmlFor="ProductType">ProductType</label>
            <input type="text" id="ProductType" name="productType" />
          </div>
          <div className="modal2__buttons">
          <input type="submit" value="Submit" id="submitBtn2"/>
          <button onClick={showAddProductModal} type="button" >Cancel</button>
          </div>
        </form>
       
      </div>
     
      

      <div className="productCards-container">
        {props.products.map(cardsList => {
          return (
            <AdminCards
              key={cardsList._id}
              title={cardsList.title}
              description={cardsList.description}
              price={cardsList.price}
              image={cardsList.productImage}
              objectID={cardsList._id}
              // openModal={showModal}
              deleteProduct={deleteFunc}
              productType={cardsList.productType}
              brand={cardsList.brand}
            />
          );
        })}
      </div>
    </main>
  );
};

export default withRouter(Admin);
