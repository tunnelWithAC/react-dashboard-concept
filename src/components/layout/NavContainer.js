import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { Matches } from '../pages';
import  ResponsiveDrawer from './ResponsiveDrawer';
// import { black, green } from '@material-ui/core/colors';

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: 'auto'
  },
  sidenav: {

  },
  main: {
    paddingRight: 40,
    paddingLeft: 40
  }
});

function NavContainer({ classes }) {
  return (
    <Grid container>
      <Grid item xs={12} sm={2}>
        <ResponsiveDrawer />
      </Grid>
      <Grid item xs={12} sm={10} className={classes.main}>
        <Matches/>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(NavContainer);
