import React from "react";
import Hero from "./hero/hero";
import Derik from "../../assets/images/derik.jpg";
import Luis from "../../assets/images/luis.jpg";
import Seyfat from "../../assets/images/seyfat.jpg";
import DW from "../../assets/images/dwdrumset.jpeg";
import Sabian from "../../assets/images/guitar.jpg";
import Promark from "../../assets/images/keyboard.jpg";
import Drumheads from "../../assets/images/saxophone.jpg";
import IntroDrums from "../../assets/images/introDrums.jpg";
import IntroDrumsTwo from "../../assets/images/drumsconcert.jpg";

const Home = () => {
  //   let i = 0;
  //   let images = [];
  //   let time = 3000;

  //   images[0] = `url(${Speaker})`;
  //   images[1] =`url(${Drum})`;
  //   images[2] = `url(${DrumTwo})`;;

  //   function changeImg() {
  //     const hero = document.querySelector(".hero");
  //     hero.style.backgroundImage = images[i];
  //     if (i < images.length - 1) {
  //       i++;
  //     } else {
  //       i = 0;
  //     }
  //     setTimeout(changeImg, time);
  //   }

  //   window.onload = changeImg;

  return (
    <main>
      <Hero />
      <section className="intro-card">
        <div className="intro-card__container">
          <img src={IntroDrumsTwo} alt="" />
          <p>
            Groove was founded in 2016. It was founded in the idea of
            solely focusing on drum products. We want to bring the best products
            at the lowest prices. We want our customers to feel appreciated,
            that is why we also bring the customer service in the country.{" "}
          </p>
        </div>
      </section>

      <section className="availableProducts">
        <h2>Available Products</h2>
        <div className="availableProducts__container">
          <figure>
          <img src={DW} alt="" />
          </figure>
          <figure>
          <img src={Sabian} alt="" />
          </figure>
          <figure>
          <img src={Drumheads} alt="" />
          </figure>
          <figure>
          <img src={Promark} alt="" />
          </figure>
        </div>
      </section>
      {/* <section className="availableProducts">
      <h2>Coming Soon</h2>
      <div className="availableProducts__container">
        <img src={DW} alt=""></img>
        <img src={Sabian} alt=""></img>
        <img src={Sabian} alt=""></img>
      </div>

      
      </section>  */}
      <section className="smallCard">
        <div className="smallCard__container">
          <div className="smallCard__container__content">
            <p>
              Shop now! Browse our products page and the find the best cymbals,
              drum kits, drumheads, and more!{" "}
            </p>
            <button>Shop Now!</button>
          </div>
          <img src={IntroDrums} alt="" />
        </div>
      </section>

      <div className="customerCards-container">
        <h2>Customer Reviews</h2>
        <section className="customerCards">
          <figure className="customerCards__card">
            <img src={Derik} alt="Luis" />
            <figcaption>
              Groove has provided me with the best customer service of any other music store. I felt genuily cared for.
            </figcaption>
            <div className="customerCards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </figure>
          <figure className="customerCards__card">
            <img src={Luis} alt="" />
            <figcaption>
             Groove has provided me with the best prices and quality equipment. I am really glad I discovered Groove.
            </figcaption>
            <div className="customerCards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </figure>
          <figure className="customerCards__card">
            <img src={Seyfat} alt="" />
            <figcaption>
              I'm a drummer and being able to shop somewhere where they focus on drums only, is definitely a big plus!
            </figcaption>
            <div className="customerCards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </figure>
        </section>
      </div>
    </main>
  );
};
export default Home;
