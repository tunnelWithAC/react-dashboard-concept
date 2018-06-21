import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const styles = theme => ({
  paper: {
    marginTop: 4,
    padding: theme.spacing.unit * 0.75,
    margin: theme.spacing.unit * 0.5,
    color: theme.palette.text.secondary
  },
  content: {
    textAlign: 'center'
  },
  leftItem: {
    textAlign: 'left'
  },
  leftText: {
    color: green[500],
    paddingRight: theme.spacing.unit
  },
  rightItem: {
    textAlign: 'right'
  },
  rightText: {
    paddingRight: theme.spacing.unit
  },
  chart: {
    marginTop: 7.5
  }
});

function Block({ classes, xs, sm, leftText, rightText, content, chart }) {
  return (
    <Grid item xs={xs} sm={sm} >
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={9} className={classes.leftItem}>
            <Typography variant="body2" className={classes.leftText}>
              {leftText}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.rightItem}>
            <Typography variant="body2" className={classes.rightText}>
              {rightText}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.chart}>
            <Typography variant="headline" className={classes.content}>
              {content}
            </Typography>
            {chart !== undefined &&
              <div>
                {chart}
              </div>
            }
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default withStyles(styles)(Block);
