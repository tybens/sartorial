import React from "react";
import { AppBar, Toolbar, IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";

import useStyles from "./styles";

const routes = [
  { to: "/", label: "Home" },
  { to: "/media", label: "media" },
  { to: "/blog", label: "Mission" },
  { to: "/shop/collections", label: "Shop" },
];

const PrimarySearchAppBar = ({ totalItems, habitatLogo }) => {
  const classes = useStyles();

  const links = routes.map(({ to, label }) => {
    return (
      <NavLink
        strict
        exact
        to={to}
        style={{ zIndex: 2 }}
        key={to}
      >
        {label}
      </NavLink>
    );
  });

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar className="navbar" disableGutters={true}>
        <div className={classes.titleDiv}>
          <Link to="/" className={classes.image}>
            {/* <img
                height="150px"
                src="/images/spinningrotary.gif"
                alt="Spinning Sartorial Logo"
              /> */}
            <img
              height="100%"
              src={habitatLogo}
              alt="Ha317at Sartorial Banner"
            />
          </Link>
        </div>
        <nav>
          {links}
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/shop/cart"
              aria-label="Show cart items"
              color="inherit"
              style={{ zIndex: 1 }}
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default PrimarySearchAppBar;
