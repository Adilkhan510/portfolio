import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import img from '../Images/62.jpg'
import { Typography, Container } from '@material-ui/core';
import Particles from 'react-particles-js'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent : "center",
    alignItems : "center",
    marginTop : "20px",
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper : {
      width : "90vw",
      height : "70vh",
      display : "flex",
      flexDirection : "column",
      justifyContent : "space-evenly",
  },
  title : {
      background : "yellow",
      width : "10%",
      height : "10%",
      position: "relative",
      top: "-5%",
      left : "-5%"
  },
  insideContainer : {
      width : "80%",
      height : "65%",
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.paper}>
          <Paper className={classes.insideContainer} elevation={6}>
            <Paper className={classes.title} elevation={5}>
                About me 
            </Paper>
          </Paper>
      </Container>
    </div>
  );
}