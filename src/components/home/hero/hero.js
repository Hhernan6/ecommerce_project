import React, { Component } from "react";

import Keyboard from "../../../assets/images/keyboard-hero.jpg";
import Drums from "../../../assets/images/drumsconcert.jpg";
import Guitar from "../../../assets/images/guitar-hero.jpg";

let i = 0;
let images = [];

images[0] = `url(${Keyboard})`;
images[1] = `url(${Drums})`;
images[2] = `url(${"https://cdn.pixabay.com/photo/2015/03/26/10/22/band-691224_1280.jpg"})`;
images[3] = `url(${Guitar})`
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
