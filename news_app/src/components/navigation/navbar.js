import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    border: 'none',
  },
  bar:{
    flexGrow: 1,
    boxShadow: 'none',
    background: '#69f0ae',
  }
};

function NavBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar  className={classes.bar} position="static" >
        <Toolbar className={classes.bar}>
          <Typography variant="h6" color="inherit" >
            Newsie
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);