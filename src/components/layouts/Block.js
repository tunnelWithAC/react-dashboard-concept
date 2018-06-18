import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    marginTop: 4,
    padding: theme.spacing.unit * 0.75,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Block extends Component {

  render() {
    const { classes, xs, sm, title, content, chart } = this.props;

    return (
      <Grid item xs={xs} sm={sm} >
        <Paper className={classes.paper}>
          <Typography variant="body2">
            {title}
          </Typography>
          <Typography variant="headline">
            {content}
          </Typography>
          {chart !== undefined &&
            <Fragment>
              {chart}
            </Fragment>
          }
        </Paper>
      </Grid>
    )
  }
}


Block.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  chartData: PropTypes.object
};

Block.defaultProps = {
  chartData: {
    labels: [ '1', '2', '3', '4', '5', 'RE'],
    datasets: [
      {
        label: 'Population',
        data: [
          617594,
          181045,
          154060,
          106519,
          105162,
          95072
        ]
      }
    ]
  }
};

export default withStyles(styles)(Block);
