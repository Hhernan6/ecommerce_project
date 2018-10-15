import React from "react";
import Hero from "./hero/hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="small-card">
        <div className="small-card__container">
          <img src={require("../../assets/images/introDrums.jpg")} alt="" />
          <div className="small-card__container__content text-center">
            <p>
              Welcome to Groove! We have new products available now! Start
              exploring our vast selection ofproducts and start grooving!
            </p>
          </div>
        </div>
      </section>
      <section className="availableProducts">
        <h2 className="text-center">Available Products</h2>
        <div className="availableProducts__container margin-auto">
          <figure>
            <img src={require("../../assets/images/dwdrumset.jpeg")} alt="" />
            <figcaption >Drum Kits</figcaption>
          </figure>
          <figure>
            <img src={require("../../assets/images/guitar.jpg")} alt="" />
            <figcaption>Guitars</figcaption>
          </figure>
          <figure>
            <img src={require("../../assets/images/saxophone.jpg")} alt="" />
            <figcaption>Saxophones</figcaption>
          </figure>
          <figure>
            <img src={require("../../assets/images/keyboard.jpg")} alt="" />
            <figcaption>Keyboards</figcaption>
          </figure>
        </div>
      </section>

      <section className="small-card ">
        <div className="small-card__container margin-auto">
          <div className="small-card__container__content text-center">
            <p>
              Shop now! Browse our products page and find the best prices on saxophones,
              drum kits, guitars and more!{" "}
            </p>
            <button>Shop Now!</button>
          </div>
          <img src={require("../../assets/images/introDrums.jpg")} alt="" />
        </div>
      </section>

      <div className="customerCards-container text-center ">
        <h2>Customer Reviews</h2>
        <section className="customerCards ">
          <figure className="customerCards__card margin-auto ">
            <img src={require("../../assets/images/derik.jpg")} alt="" />
            <figcaption>
              Groove has provided me with the best customer service of any other
              music store. I felt genuily cared for.
            </figcaption>
            <div className="customerCards__content__rating">
              <p>Rating: </p>
              <span />
            </div>
          </figure>
          <figure className="customerCards__card margin-auto ">
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
          <figure className="customerCards__card margin-auto ">
            <img src={require("../../assets/images/seyfat.jpg")} alt="" />
            <figcaption>
              Groove has way better customer service, products, and prices on drum kits 
              than any other store.
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
