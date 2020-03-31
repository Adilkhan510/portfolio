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
      background : "#eeb14f",
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
    color : "black"
  },
  Content : {
    background : "#A6D8D4"
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
              <Paper Elevation= {4} className={classes.Content}>
                <Typography className={classes.Typography}>
                  Hi, My name is Adil. I am full stack developer. I am first generation college graduate with a degree in BioPsychology. After graduating college I decided to explore the world of programming and found it to be quite interesting. I enjoy working with JavaScript, React and Python. 
                <br></br>
                <br />
                I am also a huge basketball fan. My favorite player is Kobe Bryant due to his work ethic and dedication to his craft. My biggest goal in life is to provide educational resources to people back in my native country. 
                </Typography>
              </Paper>
            </Container>
          </Paper>
      </Container>
    </div>
  );
}