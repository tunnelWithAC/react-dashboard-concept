import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { WithRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: { main: green[500] },
    type: 'dark',
  },
});

const NavButton = ({ url }) => (
  <Link to={url} style={{ textDecoration: 'none' }} >
    <Button>
      <Typography variant="caption">{url}</Typography>
    </Button>
  </Link>
)

const LoginButton = () => (
  <Link to='/login' style={{ textDecoration: 'none' }} >
    <Button variant="outlined">
      Login
    </Button>
  </Link>
)

const LogoutButton = (props) => (
  <Button onClick={props.onClick}>
    Logout
  </Button>
)

export default class Header extends Component {

  render() {
    const { isLoggedIn, onLogoutClick } = this.props

    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={onLogoutClick} />;
    } else {
      button = <LoginButton />
    }

      return ( <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={{ textDecoration: 'none' }} >
                <Typography variant="headline">Connacht Rugby</Typography>
            </Link>

            {isLoggedIn &&
              <Fragment>
                <NavButton url="home" />
                <NavButton url="matches" />
                <NavButton url="test3" />
              </Fragment>
            }
            <Tabs style={{flex: 1}}></Tabs>
            {button}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    )
  }
}
