import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Card } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class ChipsArray extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'Angular' },
      { key: 1, label: 'jQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'React' },
      { key: 4, label: 'Vue.js' },
    ],
  };

  handleDelete = data => () => {
    const chipData = [...this.state.chipData];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    this.setState({ chipData });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment className={classes.root}>
        {this.state.chipData.map(data => {

          return (
            <Chip
              key={data.key}

              label={data.label}
              onDelete={this.handleDelete(data)}
              className={classes.chip}
            />
          );
        })}
      </Fragment>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsArray);
