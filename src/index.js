import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import CopyConstructorBuilder from "./copyconstructorbuilder";
import { AppBar, Paper, CssBaseline, Typography, Toolbar } from '@material-ui/core';

ReactDOM.render(
  <>
    <CssBaseline/>
    <AppBar position="static">
      <Toolbar>
      <Typography variant="display1" color="inherit">Java Tools</Typography>
      </Toolbar>
    </AppBar>
    <Paper square>
      Hello
      <CopyConstructorBuilder/>
    </Paper>
  </>,
  document.getElementById("root")
);
