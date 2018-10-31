import React from "react";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="small-card__container">
        <div className="small-card__container-content">
          <img src={require("../../assets/images/introDrums.jpg")} alt="Drum set" />
          <div className="small-card__container__content-side text-center">
            <p>
              Welcome to Groove! We have new products available now! Start
              exploring our vast selection of products and start grooving!
            </p>
          </div>
        </div>
      </section>
      <section className="available-products">
        <h2 className="text-center">Available Products</h2>
        <div className="available-products__container margin-auto">
          <figure>
            <img src={require("../../assets/images/dwdrumset.jpeg")} alt="Drum set" />
            <figcaption >Drum Kits</figcaption>
          </figure>
          <figure>
            <img src={require("../../assets/images/guitar.jpg")} alt="Person playing the guitar" />
            <figcaption>Guitars</figcaption>
          </figure>
          <figure>
            <img src={require("../../assets/images/saxophone.jpg")} alt="Person playing the saxophone" />
            <figcaption>Saxophones</figcaption>
          </figure>
          <figure>
            <img src={require("../../assets/images/keyboard.jpg")} alt="Person playing the keyboard" />
            <figcaption>Keyboards</figcaption>
          </figure>
        </div>
      </section>

      <section className="small-card__container">
        <div className="small-card__container-content">
          <div className="small-card__container__content-side text-center">
            <p>
              Shop now! Browse our products page and find the best prices on saxophones,
              drum kits, guitars and more!{" "}
            </p>
            <button>Shop Now!</button>
          </div>
          <img src={require("../../assets/images/guitar-hero.jpg")} alt="Person playing the guitar" />
        </div>
      </section>

      <section className="customer-cards-wrapper margin-auto text-center ">
        <h2>Customer Reviews</h2>
        <div className="customer-cards ">
          <figure className="customer-cards__card margin-auto ">
            <img src={require("../../assets/images/derik.jpg")} alt="" />
            <figcaption>
              Groove has provided me with the best customer service of any other
              music store. I felt genuily cared for.
            </figcaption>
            <div className="customer-cards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </figure>
          <figure className="customer-cards__card margin-auto ">
            <img src={require("../../assets/images/luis.jpg")} alt="" />
            <figcaption>
              Groove has provided me with the best prices and quality equipment.
              I am really glad I discovered Groove.
            </figcaption>
            <div className="customer-cards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </figure>
          <figure className="customer-cards__card margin-auto ">
            <img src={require("../../assets/images/seyfat.jpg")} alt="" />
            <figcaption>
              Groove has way better customer service, products, and prices on drum kits 
              than any other store.
            </figcaption>
            <div className="customer-cards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </figure>
        </div>
      </section>
    </main>
  );
};
export default Home;
