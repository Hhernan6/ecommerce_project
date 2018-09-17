import React from "react";
import Json from "./Json.js";
import Cards from "../products/Cards.js";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      productsItems: Json,
      filteredArray: []
    };
  }

  brandFilter = e => {
    e.preventDefault();
    let priceValue = document.getElementById("priceSelect").value;
    let brandValue = document.getElementById("brandSelect").value;
    let productTypeValue = document.getElementById("productTypeSelect").value;
    console.log(priceValue);
    console.log(brandValue);
    console.log(productTypeValue);
    
    // let drumProducts = [];

    let allFilters = this.state.productsItems.products;
    if (brandValue !== 'Brand') {
      console.log('in brand filter');
      allFilters = allFilters.filter(product => product.brand === brandValue);
      console.log(allFilters);
   
    } 
    if (priceValue !== 'Price') {
      console.log('in price filter');
      allFilters = allFilters.filter(product => product.price <= priceValue);
      console.log(allFilters);
    } 
    if (productTypeValue !== 'Product Type') {
      console.log('in product type filter');
      allFilters = allFilters.filter(
        product => product.productType === productTypeValue
      );
      console.log(allFilters);
    } 

    this.setState({
      filteredArray: allFilters
    });
  };

  render() {
    let products = [];
    console.log('state:',this.state);
    if (this.state.filteredArray.length > 0) {
      products = this.state.filteredArray;
    } else {
      products = this.state.productsItems.products;
    }

    return (
      <main>
        <div className="Hero">
          <div className="Hero__text">
            <h1>Products</h1>
          </div>
        </div>
        <form id="form" onChange={this.brandFilter}>
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

              <option value="Sabian">Sabian</option>

              <option value="DW">DW</option>

              <option value="Promark">Promark</option>
              <option value="Evans">Evans</option>
            </select>
            <select id="productTypeSelect" name="Brand" form="form">
              <option value="Product Type">Product Type:</option>
              <option value="Cymbal">Cymbal</option>
              <option value="Drum Kit">Drum Kit</option>
              <option value="Drumhead">Drumhead</option>
              <option value="Drumstick">Drumstick</option>
            </select>
          </section>
        </form>
        <div className="row">
          {products.map(cardsList => {
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
}

export default Products;
