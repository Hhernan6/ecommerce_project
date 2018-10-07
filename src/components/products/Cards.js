import React from "react";
class Cards extends React.Component {
    constructor(props) {
        super(props)  
        this.state = {
        quantity: 0
        }
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
        <div className="row__productCard">
        <img src={this.props.image} alt="DW performance drum set"/>
        <div className="productCard__description">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <p>Price: {this.props.price} </p>
        <div className="row__productCard__bottom">
        <button onClick={() => {
              this.handleQuantity('+');
          }}>+</button>
          <button onClick={() => {
              this.handleQuantity('-');
          }}>-</button>
          <p>Quantity: {this.state.quantity}</p>
          </div>

          </div>
      </div>
    )}
}

export default Cards