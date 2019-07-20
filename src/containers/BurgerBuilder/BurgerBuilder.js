import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICE = {
  cheese: 0.3,
  meat: 1.3,
  bacon: 0.7,
  salad: 0.4
}
class BurgerBuilder extends Component {

  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      meat: 0,
      salad: 0
    },
    totalPrice: 4,
    purchasable: false
  }

  updatePurschasable(ingredients) {
    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey];
    }).reduce((sum, el) => {
      console.log("sum:" + sum + "el:" + el);
      return sum + el;
    }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + INGREDIENTS_PRICE[type];
    this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients });
    this.updatePurschasable(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - INGREDIENTS_PRICE[type];
    this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients });
    this.updatePurschasable(updatedIngredients);
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          disabled={disabledInfo}
          purchasable={this.state.purchasable} />
      </Aux>
    );
  }
}

export default BurgerBuilder;