import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

import './App.css';
import Nav from './Components/nav';
import Hero from './Components/Hero';
import Content from './Content/projects'
import Projects from './Components/Project/Projects'
import About from './Components/About'
import Particles from 'react-particles-js';
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
            <Route exact path="/" component= {About} /> 
            <Route exact path="/projects" component={()=> <Projects projects = {Content} />} />
          </Switch>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
