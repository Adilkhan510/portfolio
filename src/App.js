import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

import './App.css';
import About from './Components/About'
import Navbar from './Components/Navbar.2'
import theme from './Components/Styles/theme.js'
import { CssBaseline } from '@material-ui/core';



function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Navbar />
          <Switch>
            <Route exact path="/" component={About} />
          </Switch>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
