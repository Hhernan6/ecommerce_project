import React from 'react' 
import AdminHeader from '../adminHeader/AdminHeader';

import AdminContactCards from '../AdminContactCards/AdminContactCards';
const contactAdmin = (props) => {
    return (
        <main>
        <AdminHeader />
        <div className="row">
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
    )
}

export default contactAdmin