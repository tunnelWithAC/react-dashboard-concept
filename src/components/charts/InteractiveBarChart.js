import React, { Component, Fragment } from 'react';
import BarChart from './BarChart';
import { Grid } from '@material-ui/core';
import { Checkboxes }  from '../layout';

class InteractiveBarChart extends Component {

  render() {
    const { data, event_names, clickBox, options } = this.props

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={3}>

          </Grid>
          <Grid item xs={4}>
            < BarChart
              data={data}
              options={options}
            />
          </Grid>
          <Grid item xs={2}>

          </Grid>
          <Grid item xs={3}>
            <Checkboxes
              event_names={event_names}
              clickBox={clickBox}
            />
          </Grid>
        </Grid>
      </Fragment>

    )
  }
}

export default InteractiveBarChart;
