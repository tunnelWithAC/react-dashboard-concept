import React from 'react';
import { Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: 'auto'
  }
})

export default withStyles(styles)(() =>
  <Grid container>
    <Grid item xs={12} sm={1}>
      Sidenav
    </Grid>
    <Grid item xs={12} sm={11}>
      Main Content
    </Grid>
  </Grid>
)
