import React from "react";
class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        quantity: 0
        }
    }
    handleQuanity = action => {
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
        <div className="productCard__content">
        <img src={this.props.image} alt="DW performance drum set"/>
        <div className="description">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <p>Price: {this.props.price} </p>
        <div className="productCard__content__bottom">
        <button onClick={() => {
              this.handleQuanity('+');
          }}>+</button>
          <button onClick={() => {
              this.handleQuanity('-');
          }}>-</button>
          <p>Quantity: {this.state.quantity}</p>

          </div>

          </div>
      </div>
    )}
}

export default Cards