import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Singleton from '../../templates/Singleton/Singleton.jsx';
import NameForm from '../../organisms/NameForm/NameForm.jsx';
import NameBox from '../../organisms/NameBox/NameBox.jsx';

import background from '../../../assets/background.png';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff9f8f',
      main: '#ff6d61',
      dark: '#db413d',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffcd50',
      main: '#f99c17',
      dark: '#c06d00',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default class Index extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Singleton background={background}>
          <NameForm />
          <NameBox />
        </Singleton>
      </MuiThemeProvider>
    );
  }
}
