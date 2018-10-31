import React from "react";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }

  handleQuantity = action => {
    if (action === "+") {
      this.setState({
        quantity: this.state.quantity + 1
      });
    } else if (action === "-" && this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };

  render() {
    return (
      <div className="row__product-card">
        <img src={this.props.image} alt="DW performance drum set" />
        <div className="product-card__description">
          <h2>{this.props.title}</h2>
          <p className="product-card__description--height">{this.props.description}</p>
          <p>Price: <span className="product-card__description--bold">
          {this.props.price} </span></p>
          <div className="row__product-card__bottom">
            <button
              onClick={() => {
                this.handleQuantity("+");
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                this.handleQuantity("-");
              }}
            >
              -
            </button>
            <p>Quantity: {this.state.quantity}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
