import React from "react";
import Hero from "./hero/hero";
import Derik from "../../assets/images/derik.jpg";
import Luis from "../../assets/images/luis.jpg";
import Seyfat from "../../assets/images/seyfat.jpg";
import DW from "../../assets/images/dwdrumset.jpeg";
import Sabian from "../../assets/images/cymbals.jpg";
import Promark from "../../assets/images/promarksticks.jpg";
import Drumheads from "../../assets/images/drumheads.jpg";
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
      <section className="intro">
        <div className="intro__container">
          <img src={IntroDrumsTwo} alt="" />
          <p>
            Snares and Drums was founded in 2016. It was founded in the idea of
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
      <section className="bigCard">
        <div className="bigCard__container">
          <div className="bigCard__container__inner">
            <p>
              Shop now! Browse our products page and the find the best cymbals,
              drum set, drumheads, and more!{" "}
            </p>
            <button>Shop Now!</button>
          </div>
          <img src={IntroDrums} alt="" />
        </div>
      </section>

      <div className="cardsContainer">
        <h2>Customer Reviews</h2>
        <section className="cards">
          <div className="cards__content">
            <img src={Derik} alt="Luis" />
            <p>
            When I went to the Snares and Drums website, I knew that I found
              the right music store to shop at. I am drummer and when to shop at
              other music stores, I felt unwanted and not paid attention to. I
              felt like those music stores did not care about the drum
              department. At Snare and Drums, I found all of that.{" "}
            </p>
            <div className="cards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </div>
          <div className="cards__content">
            <img src={Luis} alt="" />
            <p>
              When I went to the Snares and Drums website, I knew that I found
              the right music store to shop at. I am drummer and when to shop at
              other music stores, I felt unwanted and not paid attention to. I
              felt like those music stores did not care about the drum
              department. At Snare and Drums, I found all of that.{" "}
            </p>
            <div className="cards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </div>
          <div className="cards__content">
            <img src={Seyfat} alt="" />
            <p>
              When I went to the Snares and Drums website, I knew that I found
              the right music store to shop at. I am drummer and when to shop at
              other music stores, I felt unwanted and not paid attention to. I
              felt like those music stores did not care about the drum
              department. At Snared and Drums, I found all of that.{" "}
            </p>
            <div className="cards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Home;
