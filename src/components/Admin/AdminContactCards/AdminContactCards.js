import React from "react";

const AdminContactCards = props => {
  return (
    <div className="contact-row__content">
      <div className="contact-row__info text-center">
        <h2>{props.firstName} {props.lastName}</h2>
        <p>{props.email}</p>
        <p>{props.phoneNum}</p>
      </div>
      <div className="contact-row__info__comments text-center">
        <p>{props.comments}</p>
      </div>
    </div>
  );
};

export default AdminContactCards;
