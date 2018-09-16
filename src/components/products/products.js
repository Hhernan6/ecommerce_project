import React from "react";
import Json from "./Json.js";
import Cards from "../products/Cards.js";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      productsItems: Json,
      array: []
    };
  }
  //   handleQuanity = action => {
  //     if (action === "+") {
  //       this.setState({
  //         action: '+',
  //         quantity: this.state.quantity + 1
  //       });
  //     } else if (action === "-" && this.state.quantity > 0) {
  //       this.setState({
  //         action: '+',
  //         quantity: this.state.quantity - 1
  //       });
  //     }
  //   };

  // filterInput = () => {
  //   let selectDropDown = document.querySelector('.selectDropDown')
  //   selectDropDown.addEventListener('change', () => {
  //     console.log(selectDropDown.value);
  //     console.log(findFilter(selectDropDown.value));
  //   })
  // }

  brandFilter = (e) => {
    e.preventDefault();
    let  priceValue = document.getElementById('a').value;
    let  brandValue = document.getElementById('b').value;
    let productTypeValue = document.getElementById('c').value;

    // let drumProducts = [];
    

    let allFilters = this.state.productsItems.products;

    // if (this.state.array.length > 0) {
    //   drumProducts = this.state.array;
    // } else {
    //   drumProducts = this.state.productsItems ;
    // }
    // let result = drumProducts.filter(
    //   currentItem => currentItem >= priceValue
    // );
    if(brandValue) { 
      allFilters = allFilters.filter(product => product.brand === brandValue)
      console.log(allFilters)
      
 
     } 
     if (priceValue) {
     allFilters = allFilters.filter(product => product.price <= priceValue)
     console.log(allFilters)
     

    } 

    if(productTypeValue) { 
      allFilters = allFilters.filter(product => product.productType === productTypeValue)
      console.log(allFilters)
      
 
     }
     
    this.setState({
      array: allFilters
    });



    
      // let allProducts = [];
    // console.log(filter);
    // console.log(allProducts)



    

  }


  render() {

 
    let cars = [];

    if (this.state.array.length > 0) {
      cars = this.state.array;
    } else {
      cars = this.state.productsItems.products;
    }

    return (
      <main>
        
        <div className="Hero">
          <div className="Hero__text">
            <h1>Products</h1>
          </div>
        </div>
        <form id ="form" onChange={this.brandFilter}>
        <section className="filters">
          <select id="a" name="Price" form="form">
            <option value="Price">Price: </option>
            <option value="100">100 </option>
            <option value="600">600 </option>
            <option value="1000"> 1000 </option>
            <option value="2000">2000 </option>
          </select>
          <select id="b" name="Product Type" form="form">
            <option value="Brand">Brand:</option>
     
            <option value="Sabian">Sabian</option>

            <option value="DW">DW</option>

            <option value="Promark">Promark</option>
            <option value="Evans">Evans</option>
       
          </select>
          <select id="c" name="Brand" form="form">
            <option value="Product Type">Product Type:</option>
            <option value="Cymbal">Cymbal</option>
            <option value="Drum Kit">Drum Kit</option>
            <option value="Drumhead">Drumhead</option>
            <option value="Drumstick">Drumstick</option>
          </select>
        </section>
        </form>
        <div className="row">
          {cars.map(cardsList => {
            return (
              <Cards
                key={cardsList.title}
                title={cardsList.title}
                description={cardsList.description}
                price={cardsList.price}
                image={cardsList.productImage}
                // quantity = {this.state.quantity}
                // changeQuantiyt = {() => {
                //     this.handleQuanity(this.state.action)} }
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default Products;
