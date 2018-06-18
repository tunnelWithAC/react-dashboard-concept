import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Block from './Block';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


export default class Matches extends Component {

  render() {
    const { classes } = this.props

    return(
      <div>
        <Grid container spacing={8}>
          {/* Row 1: 4 cell box displaying match stats */}
          <Block sm={3} xs={12} title='Total Revenue' content='36,000'/>
          <Block sm={3} xs={12} title='Total Tickets Sold' content='5,400'/>
          <Block sm={3} xs={12} title='% Revenue To Target' content='26%'/>
          <Block sm={3} xs={12} title='# Tickets to target' content='3,200'/>

          {/* Row 3 */}
          <Block classes={classes} sm={4} xs={12} title='Ticket Sales (2 Day Average)' content='108 / Day'/>
          <Block classes={classes} sm={4} xs={12} title='# Tickets to sell / Day to reach revenue target' content='138 / Day'/>
          <Block classes={classes} sm={4} xs={12} title='# Days to game/ lead time' content='18 days out'/>

        </Grid>
      </div>
    )
  }
}
