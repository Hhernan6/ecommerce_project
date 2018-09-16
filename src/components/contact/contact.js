import React from "react";

// const aux = (props) => props.children;

// export default aux;
const contact = () => {
  return (
    <main>
      <div className="Hero">
      <div className="Hero__text">
      <h1>Contact Us</h1></div>
      </div>

      <section className="contactContainer">
        <div className="contactContainer__companyInfo">
        <div className="contactContainer__companyInfo__text">
            <p>123 rd view something, N.C</p>
            <p>Phone Number: 8484848484</p>
            <p>Email: something@something.com</p>
        </div>
        </div>
        <form className="form1">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phoneNum">Phone Number:</label>
            <input type="tel" id="phoneNum" name="phoneNum" />
          </div>
          <textarea />
          <input type="submit" value="Submit" id="submitBtn"/>
        </form>
        <div />
      </section>
    </main>
  );
};

export default contact;
