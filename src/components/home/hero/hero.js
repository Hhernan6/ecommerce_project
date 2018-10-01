import React, { Component } from "react";
import Drum from "../../../assets/images/drumset2.jpg";
import Drums from "../../../assets/images/drumset3.jpg";
import Drumt from "../../../assets/images/drumview.jpg";

let i = 0;
let images = [];

images[0] = `url(${Drum})`;
images[1] = `url(${Drums})`;
images[2] = `url(${Drumt})`;
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
    setTimeout(this.changeImg, 2000);
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
