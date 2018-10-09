import React from "react";

// const aux = (props) => props.children;

// export default aux;
const contact = () => {

  
  // You can run the elevator, by calling.
 

  return (
    <main>
      <div className="Hero">
      <div className="Hero__text">
      <h1>Contact Us</h1></div>
      </div>

      <section className="companyInfo">
        <div className="companyInfo__content">
        <div className="companyInfo__content__text">
            <address>123 Main st Charlotte, N.C.</address>
            <p>Phone Number: 704748484</p>
            <p>Email: Groove@gmail.com</p>
        </div>
        </div>
        <form className="contactForm" method="POST" action="http://localhost:3007/admin/contact">
          <div className="contact__inputs">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required/>
          </div>
          <div className="contact__inputs">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required/>
          </div>
          <div className="contact__inputs">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div className="contact__inputs">
            <label htmlFor="phoneNum">Phone Number:</label>
            <input type="tel" id="phoneNum" name="phoneNum" required/>
          </div>
          <div className="contact__inputs">
            <label htmlFor="comments">Comments</label>
          <textarea name="comments"></textarea>
          </div>
          <input type="submit" value="Submit" id="submitBtn"/>
        </form>
        <div />
      </section>
     
    </main>
  );
};

export default contact;
