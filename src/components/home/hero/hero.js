import React, { Component } from "react";

import Drums from "../../../assets/images/keyboard-hero.jpg";

import DrumHero from "../../../assets/images/drumsconcert.jpg";

let i = 0;
let images = [];

images[0] = `url(${Drums})`;
images[1] = `url(${Drums})`;
images[2] = `url(${"https://cdn.pixabay.com/photo/2015/03/26/10/22/band-691224_1280.jpg"})`;
images[3] = `url(${DrumHero})`
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

// let i = 0;
// let images = [];
// let time = 3000;

// images[0] = `url(${Drum})`;
// images[1] = `url(${Drums})`;
// images[2] = `url(${Drumt})`;


// class Hero extends Component {

//     changeImg = () => {
//         let hero = document.querySelector('.hero')
//         if (hero) {
//           hero.style.backgroundImage = images[i];
//             if(i < images.length -1 ){
                
//                 i++;
//             } else {
             
//                 i=0;
//             }
//             setTimeout(this.changeImg, time);
//         }
//     }

//     componentDidMount() {
//         this.changeImg();
//     };

//     render() {
//         return (
//             <main className="hero">
//                 <div className="hero__text">
//                         <h1>The socks you need at the price you want.</h1>
//                         <p>All the styles, colors, and prices!</p>
                        
//                 </div>
//             </main>
//         );
//     }  
// };

export default Hero;
