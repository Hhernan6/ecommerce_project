import React from "react";
import Hero from "./hero/hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="small-card">
        <div className="small-card__container">
          <img src={require("../../assets/images/introDrums.jpg")} alt="" />
          <div className="small-card__container__content">
            <p>
              Welcome to Groove! We have new products available now! Start
              exploring our variety of products selection and start grooving!
            </p>
          </div>
        </div>
      </section>
      <section className="availableProducts">
        <h2>Available Products</h2>
        <div className="availableProducts__container">
          <figure>
            <img src={require("../../assets/images/dwdrumset.jpeg")} alt="" />
            <figcaption>Drum Kits</figcaption>
          </figure>
          <figure>
            <img src={require("../../assets/images/guitar.jpg")} alt="" />
            <figcaption>Guitars</figcaption>
          </figure>
          <figure>
            <img src={require("../../assets/images/saxophone.jpg")} alt="" />
            <figcaption>Saxophone</figcaption>
          </figure>
          <figure>
            <img src={require("../../assets/images/keyboard.jpg")} alt="" />
            <figcaption>Keyboards</figcaption>
          </figure>
        </div>
      </section>

      <section className="small-card">
        <div className="small-card__container">
          <div className="small-card__container__content">
            <p>
              Shop now! Browse our products page and the find the best cymbals,
              drum kits, drumheads, and more!{" "}
            </p>
            <button>Shop Now!</button>
          </div>
          <img src={require("../../assets/images/introDrums.jpg")} alt="" />
        </div>
      </section>

      <div className="customerCards-container">
        <h2>Customer Reviews</h2>
        <section className="customerCards">
          <figure className="customerCards__card">
            <img src={require("../../assets/images/derik.jpg")} alt="Luis" />
            <figcaption>
              Groove has provided me with the best customer service of any other
              music store. I felt genuily cared for.
            </figcaption>
            <div className="customerCards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </figure>
          <figure className="customerCards__card">
            <img src={require("../../assets/images/luis.jpg")} alt="" />
            <figcaption>
              Groove has provided me with the best prices and quality equipment.
              I am really glad I discovered Groove.
            </figcaption>
            <div className="customerCards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </figure>
          <figure className="customerCards__card">
            <img src={require("../../assets/images/seyfat.jpg")} alt="" />
            <figcaption>
              I'm a drummer and being able to shop somewhere where they focus on
              drums only, is definitely a big plus!
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
