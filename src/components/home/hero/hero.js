import React, { Component } from "react";


let i = 0;
let images = [];

images[0] = `url(${"https://images.unsplash.com/photo-1466767574486-40e61f77bdd6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42afb2e7f389e92324b9f2917182b3ed&auto=format&fit=crop&w=1950&q=80"})`;
images[1] = `url(${"https://images.unsplash.com/photo-1521547418549-6a31aad7c177?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed97836abc675e636784c4925e9d31fb&auto=format&fit=crop&w=1650&q=80"})`;
images[2] = `url(${"https://www.maxpixel.net/static/photo/2x/Saxophone-Musician-Performance-Band-Concert-Music-3264716.jpg"})`;
images[3] = `url(${"https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a94d8eeeab21910577f3aa06616c2a3&auto=format&fit=crop&w=1650&q=80"})`
class Hero extends Component {
  changeImg = () => {
    let hero = document.querySelector(".hero");
    if (hero) {
    hero.style.backgroundImage = images[i];
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout(this.changeImg, 4000);
  };
}
  componentDidMount() {
    this.changeImg();
  }

  render() {
    return (
      <div className="hero">
        <div className="hero__text">
          <h1>Add more to your groove!</h1>
          <p>Drum kits, Saxophones, Guitars, and Keyboards!</p>
          <button>Shop Now</button>
        </div>
      </div>
    );
  }
}



export default Hero;
