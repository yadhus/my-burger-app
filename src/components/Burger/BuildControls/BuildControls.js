import React from "react";
import classes from "./BuildControls.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { Label: "Cheese", type: "cheese" },
  { Label: "Bacon", type: "bacon" },
  { Label: "Meat", type: "meat" },
  { Label: "Salad", type: "salad" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.Label}
          Label={ctrl.Label}
          type={ctrl.type}
          added={() => props.ingredientsAdded(ctrl.type)}
          removed={() => props.ingredientsRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW!
    </button>
  </div>
);

export default BuildControls;
