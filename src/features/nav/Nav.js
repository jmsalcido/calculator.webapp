import React from "react";
import { 
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button
} from "@material-ui/core";
import { useSelector } from "react-redux";

import materialUiStyles from '../../app/styles';
import { logOut, selectUser } from "../auth/authSlice";

export default function Nav() {
  const user = useSelector(selectUser);
  const classes = materialUiStyles();

  const isLoggedIn = user !== null;
  const isAdmin = isLoggedIn && user.roles.includes("ROLE_ADMIN");
  const featuresToShow = [];
  
  if (isAdmin) {
    featuresToShow.push(
      { value: 'Users', href: '/users' },
      { value: 'User Balance', href: '/user-balance' },
      { value: 'Services', href: '/services' },
      { value: 'Records', href: '/records' },
    );
  }

  if (isLoggedIn) {
    featuresToShow.push(
      { value: 'New Service', href: '/service/new' },
      { value: 'My Records', href: '/user-records' },
      { value: 'My Profile', href: '/profile' },
    );
  }

  const features = featuresToShow.map((feature, index) => {
    return (
    <Link key={index} variant="button" color="textPrimary" href={feature.href} className={classes.link}>
            {feature.value}
    </Link>
    )
  });

  const loginLogoutText = isLoggedIn ? "Logout" : "Login";
  const handleSignInButton = (e) => {
    if (isLoggedIn) {
      logOut();
    }
  };

  return(
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Calculator Web App
        </Typography>
        <nav>
          {features}  
        </nav>
        <Button href="/signIn" color="primary" variant="outlined" className={classes.link} onClick={handleSignInButton}>
          {loginLogoutText}
        </Button>
      </Toolbar>
    </AppBar>
  );
}