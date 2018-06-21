import React, { Component, Fragment } from 'react';
import BarChart from './BarChart';
import { Grid } from '@material-ui/core';
import { ChipsArray }  from '../layout';

class InteractiveBarChart extends Component {

  render() {
    const { data } = this.props

    console.log(data)

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={3}>

          </Grid>
          <Grid item xs={4}>
            < BarChart
              data={data}
            />
          </Grid>
          <Grid item xs={2}>
            <ChipsArray />
          </Grid>
          <Grid item xs={3}>

          </Grid>
        </Grid>
      </Fragment>

    )
  }
}

export default InteractiveBarChart;
