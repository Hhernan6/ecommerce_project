import React from "react";

import Cards from "../products/Cards.js";

 const Products = (props) => {
   console.log(props.products)
    return (
      <main>
        <div className="Hero">
          <div className="Hero__text">
            <h1>Products</h1>
          </div>
        </div>
        <form z onChange={props.brandFilter}>
          <section className="filters">
            <select id="priceSelect" name="Price" form="form">
              <option value="Price">Price: </option>
              <option value="100">100 </option>
              <option value="600">600 </option>
              <option value="1000"> 1000 </option>
              <option value="2000">2000 </option>
            </select>
            <select id="brandSelect" name="Product Type" form="form">
              <option value="Brand">Brand:</option>

              <option value="Roland">Roland</option>

              <option value="DW">DW</option>

              <option value="Tama">Tama</option>
              <option value="Allora Paris">Allora Paris</option>
            </select>
            <select id="productTypeSelect" name="Brand" form="form">
              <option value="Product Type">Product Type:</option>
              <option value="Cymbal">Cymbal</option>
              <option value="Drum kit">Drum Kit</option>
              <option value="Drumhead">Drumhead</option>
              <option value="Drumstick">Drumstick</option>
            </select>
          </section>
        </form>
        <div className="row">
          {props.products.map(cardsList => {
            return (
              <Cards
                key={cardsList.title}
                title={cardsList.title}
                description={cardsList.description}
                price={cardsList.price}
                image={cardsList.productImage}
              />
            );
          })}
        </div>
      </main>
    );
  }


export default Products;
