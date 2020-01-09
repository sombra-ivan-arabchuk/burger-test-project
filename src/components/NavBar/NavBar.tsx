import React from 'react';
import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useAuth } from '../../hooks/useAuth';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: 'rgb(255,141,85)',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
 
const NavBar = (): React.ReactElement => {
  const classes = useStyles();
  const { signIn, signOut, user } = useAuth();

  const AccessBlock =
    user.name === '' ? (
      <Button color="inherit" onClick={signIn}>
        Login
      </Button>
    ) : (
      <Button color="inherit" onClick={signOut}>
        Logout
      </Button>
    );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Burger-App
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>{AccessBlock}</div>
          <div className={classes.sectionMobile}>{AccessBlock}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
