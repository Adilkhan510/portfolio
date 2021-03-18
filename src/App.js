import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar.2";
import theme from "./Components/Styles/theme.js";
import { CssBaseline, Paper } from "@material-ui/core";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Paper elevation={0}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={About} />
            </Switch>
          </Paper>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
