import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import memories from '../../images/memories.png';

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Recuerdos</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.chartAt(0)}</Avatar>
              <Typography variant="h6" className={classes.userName}>{user.result.name}</Typography>
              <Button variant="contained" color="secondary" className={classes.logout}>Logout</Button>
            </div>

          ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>

          )}
        </Toolbar>
      </div>;
    </AppBar>
  );
};

export default Navbar;
