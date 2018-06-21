import React, { Component } from 'react';
import { Input, InputLabel, Select, MenuItem, FormControl, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Block, SortTable, Row } from '../layout';
// import  from './SortTable';
import { BarChart, InteractiveBarChart } from '../charts';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


export default withStyles(styles)(class extends Component {

  state = {
    team: '',
    match: 0
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const { classes } = this.props;

    const testData = {
      labels: ['a', 'b', 'c', 'd'],
      datasets: [
        {
          data: [
            50, 75, 100, 25
          ],
          backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
          ],
          options: {
            legend: {
              display: false
            }
          }
        }
      ]
    }

    return(
      <div>
        <Grid container>
          <Grid item xs={12}>
          <InputLabel htmlFor="match-simple">Match</InputLabel>
            <FormControl className={classes.formControl}>
              <Select
                value={this.state.match}
                onChange={this.handleChange}
                inputProps={{
                  name: 'match',
                  id: 'match-simple',
                }}
              >
                <MenuItem value={10}>Leinster Rugby</MenuItem>
                <MenuItem value={20}>Munster Rugby</MenuItem>
                <MenuItem value={30}>Cardiff</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Row 1: 4 cell box displaying match stats */}
          <Block xs={12} sm={3} leftText='Total Revenue' content='36,000'/>
          <Block xs={12} sm={3} leftText='Total Tickets Sold' content='5,400'/>
          <Block xs={12} sm={3} leftText='% Revenue To Target' content='26%'/>
          <Block xs={12} sm={3} leftText='# Tickets to target' content='3,200'/>

          {/* Row 1b: 4 cell box displaying match stats
          <Row xs={3}/>
          */}

          {/* Row 2: 2 cells displaying revenue/ ticket pacing histograms*/}
          <Block xs={12} sm={6} leftText='Revenue Pacing'
            chart={
                <BarChart
                  data={testData}
                />
              }
          />
          <Block xs={12} sm={6} leftText='Tickets Pacing'
            chart={
                <BarChart/>
              }
          />

          {/* Row 3 */}
          <Block xs={12} sm={4} leftText='Ticket Sales (2 Day Average)' content='108 / Day'/>
          <Block xs={12} sm={4} leftText='# Tickets to sell / Day to reach revenue target' content='138 / Day'/>
          <Block xs={12} sm={4} leftText='# Days to game/ lead time' content='18 days out'/>

          {/* Row 4 Horizonally oriented histogram & table */}
          <Block xs={12} sm={6} leftText='Ticket Category Breakdown' rightText='# SOLD 5400' chart={<BarChart / >}/>
          <Block xs={12} sm={6} leftText='Sales Sources' rightText='# SOLD 5400' chart={<SortTable/>}/>

          {/* Row 5 Table showing ticket sales by section */}
          <Block xs={12} sm={12} content='Ticket Sales by Section' chart={<SortTable/>}/>

          {/* Row 6: Interactive bar chart - retrospective ticket sales per day */}

          <Block xs={12} content='Retrospective ticket sales per day'
          chart={
                <InteractiveBarChart
                  data={testData}
                />
              }
          />
        </Grid>
      </div>
    )
  }
})
