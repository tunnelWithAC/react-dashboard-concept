import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { CssBaseline, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { Header, Login, NavContainer, Matches } from './components/layouts';
import { isLoggedIn } from './services/Auth';
// import './App.css';

// We can inject some CSS into the DOM.
const styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
};

const NoMatch = ( {location} ) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

class App extends Component {

  render() {
    const { classes } = this.props
    console.log("Classes", styles.button)

    return (
      <div className="App">

        {/* <CssBaseline /> */}
        <Router>
          {/* Nest everything inside a Fragment component since a Router component can only have one child */}
          <Fragment>
            <Header/>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/home" component={NavContainer} />
              <Route path="/matches" render={() =>
                  <Matches
                    style={{ padding: 20 }}
                    classes={classes}
                  />
                }/>
              <Route component={NoMatch} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
// export default App;
