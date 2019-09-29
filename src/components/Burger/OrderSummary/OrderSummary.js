import React, { Component } from "react";
import Aux from "../../../hoc/Auxi/Auxi";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("[OrderSummary] did update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span>{igKey}</span>:{this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: {this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType={"Danger"}>
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType={"Success"}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}
export default OrderSummary;
