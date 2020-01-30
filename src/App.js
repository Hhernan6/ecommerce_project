import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/CSS/App.css";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/products";
import contact from "./Components/Contact/Contact";
import Callback from "./Callback";
import Admin from "./Components/Admin/ProductsAdmin";
import SecuredRoute from "./SecuredRoute/SecuredRoute";
import AdminContact from "./Components/Admin/AdminContact/AdminContact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      filteredArray: [],
      loading: true,
      contactData: null,
      checkboxArr: null
    };
  }
//Small comment to open PR
  componentDidMount() {
    fetch("http://localhost:3007/products/")
      .then(response => response.json())
      .then(data =>
        this.setState(
          {
            data,
            loading: false
          },
          () => console.log(this.state.data)
        )
      )
      .catch(e => {
        throw e.message;
      });
    fetch("http://localhost:3007/contact")
      .then(response => response.json())
      .then(contactData =>
        this.setState(
          {
            contactData,
            loading: false
          },
        )
      )
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ', error.message);
      });
  }

  brandFilter = e => {
    e.preventDefault();
    const priceValue = document.getElementById("priceSelect").value;
    const brandValue = document.getElementById("brandSelect").value;
    let productTypeValue = document.getElementById("productTypeSelect").value;


    let allFilters = this.state.data;
    if (brandValue !== "Brand") {
      allFilters = allFilters.filter(product => product.brand === brandValue);
    }
    if (priceValue !== "Price") {
      allFilters = allFilters.filter(product => product.price <= priceValue);
    }
    if (productTypeValue !== "Product Type") {
      allFilters = allFilters.filter(
        product => product.productType === productTypeValue
      );
    }

    this.setState({
      filteredArray: allFilters
    });
  };

  render() {
    if (this.state.loading) {
      return null;
    }
    let products = [];
    if (this.state.filteredArray.length === 0) {
      products = this.state.data;
    } else {
      products = this.state.filteredArray;
    }
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route
                path="/products"
                render={() => (
                  <Products
                    products={products}
                    brandFilter={this.brandFilter}
                  />
                )}
              />
              <Route path="/contact" component={contact} />
              <Route exact path="/callback" component={Callback} />
              <SecuredRoute
                path="/admin/Contact"
                component={AdminContact}
                contactInfo={this.state.contactData}
              />
              <SecuredRoute
                path="/admin/products"
                component={Admin}
                products={this.state.data}
                exact
              />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
