import React from "react";

class AdminCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      productImage: this.props.image,
      price: this.props.price,
      description: this.props.description,
      brand: this.props.brand,
      productType: this.props.productType
    };
  }

  getFormValues = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  sendData = id => {
    console.log(this.state.price);
    const {
      title,
      productType,
      productImage,
      description,
      brand,
      price
    } = this.state;
    let newProduct = {title, brand, description, price, productType, productImage};
  
    fetch(`http://localhost:3007/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
      .then(response => response.json())
      .then(response => console.log(response.json))
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ', error.message);
      });
  };
  render() {
    return (
      <section className="admin-cards-wrapper__card">
        <div className="admin-cards-wrapper__flex">
          <img src={this.props.image} alt="DW performance drum set" />
          <div className="product-cards__description text-center">
            <h2>{this.props.title}</h2>
            <p>
              Price: <span>{this.props.price} </span>
            </p>
            <p>{this.props.description}</p>
          </div>
        </div>
        <div className="admin-cards-wrapper__btns">
          <button
            onClick={() => this.props.toggle(`edit-${this.props.objectID}`)}
          >
            Edit
          </button>
          <button onClick={() => this.props.toggle(this.props.objectID)}>
            Delete
          </button>
        </div>

        <div className="modal">
          <div className="delete-modal" id={this.props.objectID}>
            <div className="delete-modal__content">
              <p>Are you sure you want to delete this product item?</p>
              <div className="delete-modal__content__buttons">
                <button
                  className="delete-modal__content__buttons--green"
                  onClick={() => this.props.deleteProduct(this.props.objectID)}
                >
                  Yes
                </button>
                <button
                  className="delete-modal__content__buttons--red"
                  onClick={() => this.props.toggle(this.props.objectID)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal">
          <div className="edit-form-modal" id={`edit-${this.props.objectID}`}>
            <form
              className="modal-form"
              id={`${this.props.title}`}
              onSubmit={() => this.sendData(this.props.objectID)}
            >
              <div className="contact__inputs">
                <label htmlFor="title">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  name="title"
                  onChange={this.getFormValues}
                  value={this.state.title}
                />
              </div>
              <div className="contact__inputs">
                <label htmlFor="productImage">Image URL</label>
                <input
                  type="text"
                  id="productImage"
                  name="productImage"
                  onChange={this.getFormValues}
                  value={this.state.productImage}
                />
              </div>
              <div className="contact__inputs">
                <label htmlFor="price">Price:</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  onChange={this.getFormValues}
                  value={this.state.price}
                />
              </div>

              <div className="contact__inputs">
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  onChange={this.getFormValues}
                  value={this.state.brand}
                />
              </div>
              <div className="contact__inputs">
                <label htmlFor="ProductType">ProductType</label>
                <input
                  type="text"
                  id="productType"
                  name="productType"
                  onChange={this.getFormValues}
                  value={this.state.productType}
                />
              </div>
              <div className="contact__inputs">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  onChange={this.getFormValues}
                  value={this.state.description}
                />
              </div>
              <div className="modal-form__buttons">
                <input type="submit" value="Submit" className="modal-form__buttons--green" />
                <button onClick={() =>this.props.toggle(`edit-${this.props.objectID}`)} type="button" className="modal-form__buttons--black">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default AdminCards;
