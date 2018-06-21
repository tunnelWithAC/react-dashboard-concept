import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Input } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: 15
  },
});

export default withStyles(styles)(class extends Component {
  state = { email: '', password: '' }

  onChange = (key, value) => {
   this.setState({ [key]: value })
  }

  render() {
    const { classes, isLoggedIn, onLoginClick, loginMessage } = this.props

    return (
        isLoggedIn === false
        ? (<Fragment>
            <div className={classes.container}>
              <Input
                placeholder="Email"
                value={this.state.email}
                onChange={evt => this.onChange('email', evt.target.value)}
              />
            </div>
            <div className={classes.container}>
              <Input
                placeholder="Password"
                value={this.state.password}
                type="password"
                onChange={evt => this.onChange('password', evt.target.value)}
              />
            </div>
            <div className={classes.container}>
              <Button onClick={ () => onLoginClick(this.state.email, this.state.password) }>
                Login
              </Button>
              <span>{loginMessage}</span>
            </div>
        </Fragment>)
        : (
          <Redirect
            to={{
              pathname: "/home",
            }}
          />
        )
    )
  }
})
