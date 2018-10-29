import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme';

import Router from './Router';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <main>
            <Helmet title="Conheça o Brasil" />
            <Router />
          </main>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
