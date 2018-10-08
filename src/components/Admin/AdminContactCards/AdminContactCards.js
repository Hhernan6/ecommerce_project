import React from "react";

const AdminContactCards = props => {
  return (
    <div className="contactRow__content">
      <div className="contactRow__info">
        <h2>{props.firstName} {props.lastName}</h2>
        <p>{props.email}</p>
        <p>{props.phoneNum}</p>
      </div>
      <div className="contactRow__info__comments">
        <p>{props.comments}</p>
      </div>
    </div>
  );
};

export default AdminContactCards;
