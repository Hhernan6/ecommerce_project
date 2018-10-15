import React from "react";

// const aux = (props) => props.children;

// export default aux;
const contact = () => {
  return (
    <main>
      <div className="Hero">
        <div className="Hero__text">
          <h1>Contact Us</h1>
        </div>
      </div>

      <section className="companyInfo">
        <div className="companyInfo__content">
          <div className="companyInfo__content__text">
            <address>123 Main st Charlotte, N.C.</address>
            <p>Phone Number: 704748484</p>
            <p>Email: Groove@gmail.com</p>
          </div>
        </div>
        <form
          className="contactForm"
          method="POST"
          action="http://localhost:3007/admin/contact"
        >
          <div className="contact__inputs">
            <label className="margin-auto" htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="contact__inputs">
            <label className="margin-auto" htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="contact__inputs">
            <label className="margin-auto" htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="contact__inputs">
            <label className="margin-auto" htmlFor="phoneNum">Phone Number:</label>
            <input type="tel" id="phoneNum" name="phoneNum" required />
          </div>
          <div className="contact__inputs">
            <label className="margin-auto" htmlFor="comments">Comments</label>
            <textarea className="margin-auto" name="comments" />
          </div>
          <input className=" submitBtn margin-auto" type="submit" value="Submit" />
        </form>
        <div />
      </section>
    </main>
  );
};

export default contact;
