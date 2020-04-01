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
    zIndex : "100",
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
      background : theme.palette.secondary,
      width : "230px",
      height : "60px",
      position: "relative",
      top: "-5%",
      left : "-2.5%",
      padding : "5px",
      textAlign : "center"
  },
  insideContainer : {
      width : "auto",
      height : "65%",
  },
  img :{
    position : "absolute",
    borderRadius : "200%",
    marginLeft : "-4%",
    top : "4%",
    width : "200px",
    height : "200px"
  },
  Typography : {
    fontFamily : "font-family: 'Raleway', sans-serif;",
    color : "black",
    letterSpacing : "0.5px"
  },
  content : {
    background : theme.palette.success,
    height : "280px"
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.paper}>
          <Paper className={classes.insideContainer} elevation={6}>
          {/* <img src={A} className={classes.img} /> */}
            <Paper className={classes.title} elevation={5}>
                About me 
            </Paper>
            <Container>
              <Paper Elevation= {4} className={classes.content}>
                <Container>
                  <Typography>
                    Container #1
                  </Typography>
                </Container>
                <Container>
                  <Typography>
                    Container #2
                  </Typography>
                </Container>
                <Container>
                  <Typography>
                    Container #3
                  </Typography>
                </Container>
              </Paper>
            </Container>
          </Paper>
      </Container>
    </div>
  );
}