import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Header, Login, NavContainer, ResponsiveDrawer } from './components/layout';
import { green } from '@material-ui/core/colors';
import { Matches } from './components/pages';
import { isLoggedIn, login, logout } from './services/Auth';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
})

// 404 page
const NoMatch = ( {location} ) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
    <Link to='/home'>
      <h4>
        Previous Page
      </h4>
    </Link>
    <h4>Home</h4>
  </div>
)

class App extends Component {

  state = {
    isLoggedIn: isLoggedIn()
  }

  handleLogin = (email, password) => {
    const res = login(email, password)
    console.log(res)
    this.setState({
      isLoggedIn: res['status'],
      loginMessage: res['message']
    })
  }

  handleLogout = () => {
    logout()
    this.setState({
      isLoggedIn: false
    })
  }

  render() {

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          {/* CssBaseline remove margins between components and the sides of the screen */}
          <CssBaseline />

          <Router>
            {/* Nest everything inside a Fragment component since a Router component can only have one child */}
            <Fragment>

              <Header
                isLoggedIn={this.state.isLoggedIn}
                onLogoutClick={this.handleLogout}
              />

              <Switch>
                <Route path="/login" render={() =>
                    <Login
                      isLoggedIn={this.state.isLoggedIn}
                      onLoginClick={this.handleLogin}
                      loginMessage={this.loginMessage}
                    />
                }/>
                <Route path="/home" component={NavContainer} />
                <Route path="/matches" render={() =>
                    <Matches/>
                }/>
                <Route path="/drawer" render={() =>
                    <ResponsiveDrawer/>
                }/>
                <Route path="/" component={NavContainer} />
                <Route component={NoMatch} />
              </Switch>

            </Fragment>
          </Router>

          {/* Footer */}
          <div>
            <br/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
