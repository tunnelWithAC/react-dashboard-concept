import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { WithRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { isLoggedIn, logout } from '../../services';

const theme = createMuiTheme({
  palette: {
    primary: { main: green[500] }, // Purple and green play nicely together.
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

const LoginButton = ({}) => (
    <Link to='/login' style={{ textDecoration: 'none' }} >
      <Button variant="outlined">
        Login
      </Button>
    </Link>
)

function LogoutButton(props) {
  return (
    <Button onClick={props.onClick}>
      Logout
    </Button>
  );
}



export default class Header extends Component {

  handleLogoutClick = () => {
    logout()
  }

  render() {

    let button
    if (isLoggedIn()) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton />
    }

      return ( <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="headline">
              Connacht Rugby
            </Typography>
            {isLoggedIn() &&
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
