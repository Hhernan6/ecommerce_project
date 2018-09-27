import React from "react";

const AdminCards = props => {
  return (
    <div className="admin-cards__container">
      <div className="cards__container__content">
      
          <h1>{props.title}</h1>
          <p className="cards__container__content--id">{props.objectID}</p>
          <p className="cards__container__content--price" >{props.price} </p>
          <p className="cards__container__content--description">
            {props.description}
          </p>
          <img src={props.image} alt="DW performance drum set" />
   
        <div className="cards__container__content__btns">
          <button onClick={props.delete}>Edit</button>
          <button onClick={props.edit}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AdminCards;
