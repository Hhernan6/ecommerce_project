import React from 'react';

const AdminContactCards = (props) => {
    return (
        <div className="row__cardContent">
            <h1>{props.firstName} {props.lastName}</h1>
           
            <p>{props.email}</p>
            <p>{props.phoneNum}</p>
            <p>{props.comments}</p>
        </div>
    )
}

export default AdminContactCards