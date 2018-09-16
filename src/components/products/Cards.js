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
        <div className="cards__content2">
        <img src={this.props.image} alt="DW performance drum set"/>
        <div className="description">
          <p>{this.props.title}</p>
          <p>{this.props.description}</p>
          <p>Price: {this.props.price} </p>
          <div>
          <p>Quantity: {this.state.quantity}</p>
          {/* <button onClick={() => {
              this.handleQuanity('+');
          }}>+</button>
          <button onClick={() => {
              this.handleQuanity('-');
          }}>-</button> */}
          </div>

          </div>
      </div>
    )}
}

export default Cards