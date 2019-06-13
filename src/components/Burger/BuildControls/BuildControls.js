import React from 'react';
import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl'

const controls = [
    { Label: 'Cheese', type: 'cheese' },
    { Label: 'Bacon', type: 'bacon' },
    { Label: 'Meat', type: 'meat' },
    { Label: 'Salad', type: 'salad' },
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map((ctrl) => {
            return <BuildControl
                key={ctrl.Label}
                Label={ctrl.Label}
                type={ctrl.type}
                added={() => props.ingredientsAdded(ctrl.type)}
                removed={() => props.ingredientsRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        })}
    </div>
);

export default BuildControls;