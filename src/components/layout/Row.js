import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Typography, Card, CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const styles = theme => ({
  row: {
    background: 'white',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.2)',
    // margin: 3,
    // padding: 10,
    // paddingTop: 5,
    // paddingBottom: 15,
    height: 70,
  },
  paper: {
    // marginTop: 4,
    padding: theme.spacing.unit * 0.75,
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
  }
});

const items = [
              {'leftText': 'Total Revenue', 'content': '36,000'},
              {'leftText': 'Total Tickets Sold', 'content': '6,400'},
              {'leftText': '% Revenue to Target', 'content': '26%'},
              {'leftText': '# Tickets to Target', 'content': '3,200'}
            ]

function Row({ classes, xs, sm, leftText, rightText, content, chart }) {

  return (
        <Grid container className={classes.row}>
            {items.map(function(data, i) {

              const { leftText, rightText, content } = data

              return (
                <Fragment key={i} >
                  <Grid item  xs={xs}>
                    <Card raised={true}>
                      <CardContent>
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
                          <Grid item xs={12}>
                            <Typography variant="headline" className={classes.content}>
                              {content}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Fragment>
              )
            })}
        </Grid>

  )
}

export default withStyles(styles)(Row);
