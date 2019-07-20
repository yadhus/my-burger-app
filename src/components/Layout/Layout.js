import React from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Auxi';

const Layout = props => (
  <Aux>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
