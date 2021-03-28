import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";

import useStyles from "./styles";

const routes = [
  { to: "/", label: "Home" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/shop", label: "Shop" },
];

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/shop/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  const links = routes.map(({ to, label }) => {
    return (
      <>
        <NavLink strict exact to={to} key={to}>
          {label}
        </NavLink>
        {label === "Shop" && (
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/shop/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        )}
      </>
    );
  });

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.titleDiv} color="inherit">
            <Link to="/" className={classes.image}>
              <img
                height="150px"
                src="/images/spinningrotary.gif"
                alt="Spinning Sartorial Logo"
              />
            </Link>{" "}
            <Typography
              component={Link}
              to="/"
              className={classes.title}
              color="inherit"
            >
              HABITAT S
              <span className="with--accent" style={{ fontWeight: "bold" }}>
                art
              </span>
              orial
            </Typography>
          </Typography>
          <div className={classes.grow} />
          <nav>{links}</nav>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default PrimarySearchAppBar;
