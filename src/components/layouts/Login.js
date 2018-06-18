import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router-dom';
import { Button, Input } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { isLoggedIn, login } from '../../services';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: 15
  },

});

export default withStyles(styles)(class extends Component {
  state = {
    email: '',
    password: ''
  }

  handleLogin = () => {
    if(login(this.state.email, this.state.password)) {
      console.log("Login successful")
    }
    console.log(isLoggedIn())
  }

  updateEmailValue = (e, item) => {
    console.log(e.target.name)
    this.setState({
      email: e.target.value
    })
  }

  handleChange = (e) => {
   console.log("handle change: ", e.target.name)
   // If you are using babel, you can use ES 6 dictionary syntax
   let change = { [e.target.name] : e.target.value }
   // If you are not using babel
   // let change = {}
   // change[e.target.name] = e.target.value
   // this.setState(change)
 }

  render() {
    const { email, password } = this.state,
          { classes } = this.props

    return (
        <Fragment>
          <div className={classes.container}>
            <Input
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.updateEmailValue(e)}
            />
          </div>
          <div className={classes.container}>
            <Input
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </div>
          <div className={classes.container}>
            <Button onClick={this.handleLogin}>
              Login
            </Button>
          </div>
      </Fragment>
    )
  }
})
