import React from "react";

class AdminCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      imageURL: this.props.image,
      price: this.props.price,
      description: this.props.description,
      brand: this.props.brand,
      productType: this.props.productType
    };
  }

  showdeleteModal = id => {
    let modal = document.getElementById(`${id}`);

    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
    }
  };

  showeditformModal = id => {
    let modal = document.getElementById(`${id + 1}`);
    // console.log(modal)

    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
    }
  };

  getFormValues = event => {
    this.setState({
      [event.target.name]: event.target.value
    }),
      () => {
        console.log(event.target.value);
      };
  };
  sendData = id => {
    console.log(this.state.price);
    const {
      title,
      productType,
      imageURL,
      description,
      brand,
      price
    } = this.state;
    let body2 = { title, productType, imageURL, description, brand, price };

    fetch(`http://localhost:3007/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body2)
    })
      .then(response => response.json())
      .catch(() => {
        alert("Server is Down for maintence");
      });
  };
  render() {
    console.log("horacio", this.props.objectID);
    return (
      <div className="productCards-container__card">
        <div className="productCards-container__flex">
          <img src={this.props.image} alt="DW performance drum set" />
          <div className="productCards__description">
            <h1>{this.props.title}</h1>
            <p>Price: <span>{this.props.price} </span></p>
            <p>{this.props.description}</p>
          </div>
        </div>
        <div className="productCards-container__btns">
          <button
            className="editButton"
            onClick={() => this.showeditformModal(this.props.objectID)}
          >
            Edit
          </button>
          <button
            className="deleteButton"
            onClick={() => this.showdeleteModal(this.props.objectID)}
          >
            Delete
          </button>
        </div>

        <div className="deleteModal" id={this.props.objectID}>
          <div className="deleteModal__content">
            <p>Are you sure you want to delete this product item?</p>
            <div className="deleteModal__content__buttons">
              <button className="deleteModal__content__buttons--green"
                onClick={() => this.props.deleteProduct(this.props.objectID)}
              >
                Yes
              </button>
              <button className="deleteModal__content__buttons--red" onClick={() => this.showdeleteModal(this.props.objectID)}>
                No
              </button>
            </div>
          </div>
        </div>

        <div className="editFormModal" id={`${this.props.objectID + 1}`}>
          <form
            className="modalForm"
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
                name="imageURL"
                onChange={this.getFormValues}
                value={this.state.imageURL}
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
            <div className="modal2__buttons">
              <input type="submit" value="Submit" id="submitBtn2" />
              <button
                onClick={() => this.showeditformModal(this.props.objectID)}
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminCards;
