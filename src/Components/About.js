import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import img from '../Images/62.jpg'
import { Typography, Container } from '@material-ui/core';
import Particles from 'react-particles-js'
import A from '../Images/A.png'
import svg from '../Svg/man.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent : "center",
    alignItems : "center",
    marginTop : "20px",
    fontFamily: "'Montserrat', sans-serif",
    fontSize : "35px",
    fontWeight : "bold",
    textAlign : "center",
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
      width : "230px",
      height : "60px",
      position: "relative",
      top: "-5%",
      left : "-2.5%",
      padding : "5px"
  },
  insideContainer : {
      width : "auto",
      height : "65%",
  },
  img :{
    position : "absolute",
    borderRadius : "200%",
    marginLeft : "-4%",
    top : "2px",
    width : "200px",
    height : "200px"
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.paper}>
          <Paper className={classes.insideContainer} elevation={6}>
          <img src={A} className={classes.img} />
            <Paper className={classes.title} elevation={5}>
                About me 
            </Paper>
            <Container>
              <Paper Elevation= {4}>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br></br>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </Paper>
            </Container>
          </Paper>
      </Container>
    </div>
  );
}