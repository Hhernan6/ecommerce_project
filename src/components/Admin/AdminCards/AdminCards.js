import React from "react";

const AdminCards = props => {

   const showModal = (id) => {
    let modal = document.getElementById(`${id}`);
 
    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "flex";
    } else {
      modal.style.display = 'none'
    }
    }
  

  const showeditformModal = (id) => {
    let modal = document.getElementById(`${id+1}`);
    // console.log(modal)

    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "flex";
    } else {
      modal.style.display = 'none'
    }
  }

  return (
    <div className="admin-cards__container">
      <div className="cards__container__content">
      
          <h1>{props.title}</h1>
          <p className="cards__container__content--id">{`${props.objectID}`}</p>
          <p className="cards__container__content--price" >{props.price} </p>
          <p className="cards__container__content--description">
            {props.description}
          </p>
          <img src={props.image} alt="DW performance drum set" />
   
        <div className="cards__container__content__btns">
          <button className="deleteButton" onClick={() => showeditformModal(props.objectID)}>Edit</button>
          <button className="deleteButton" onClick={() => showModal(props.objectID)}>Delete</button>
        </div>





        <div className="modal" id={props.objectID}> 
          <div className="modal__content" >
          <p>Are you sure you want to delete this product item?</p>
          <div className="modal__content__buttons">
            <button onClick={ () => props.deleteProduct(props.objectID)}>Yes</button>
            <button onClick={ ()=>showModal(props.objectID)}>No</button>
            </div>
          </div>
        </div>










        <div className="modal3" id={`${props.objectID+1}`}>
        
        <form className="form2" method="POST" action="http://localhost:3007/products">
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
            <input type="text" id="ProductType" name="ProductType" />
          </div>
          <div className="modal2__buttons">
          <input type="submit" value="Submit" id="submitBtn2"/>
          <button onClick={() => showeditformModal(props.objectID)} type="button">Cancel</button>
          </div>
        </form>
       
      </div>
      </div>
    </div>
  );
};

export default AdminCards;
