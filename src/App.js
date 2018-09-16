import React, { Component } from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/CSS/App.css';
import Home from './components/home/home';
import products from './components/products/products';
import contact from './components/contact/contact';


class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <div className="App">
      <Header />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/products' component={products}/>
        <Route path='/contact' component={contact}/>
      </Switch>
      <Footer />
      </div>
   
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
