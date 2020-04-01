import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import img from '../Images/62.jpg'
import { Typography, Container, Box } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
      background : "#D58180",
      width : "230px",
      height : "60px",
      position: "relative",
      top: "-5%",
      left : "-2.5%",
      padding : "5px",
      textAlign : "center",
      color : "whitesmoke"
  },
  insideContainer : {
      width : "auto",
      height : "65%",
  },
  img :{
    position : "fixed",
    borderRadius : "200%",
    marginLeft : "-4%",
    top : "8%",
    left : '50%',
    width : "200px",
    height : "200px"
  },
  Typography : {
    fontFamily : "'Ubuntu', sans-serif;",
    color : "black",
    letterSpacing : "0.5px"
  },
  content : {
    height : "280px",
    textOverflow: "ellipsis",
    overflow: "scroll",
  },
  contentContainer : {
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-evenly",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const [value, setValue] = useState(0)

  return (
    <div className={classes.root}>
      <Container className={classes.paper}>
          <Paper className={classes.insideContainer} elevation={6}>
          {/* <img src={A} className={classes.img} /> */}
            <Paper className={classes.title} elevation={5}>
                About me 
            </Paper>
            <Container className={classes.content}>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis vitae et leo duis ut diam quam. Sed libero enim sed faucibus turpis in eu mi bibendum. Felis eget velit aliquet sagittis id consectetur purus ut. Ullamcorper sit amet risus nullam eget felis eget. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Scelerisque in dictum non consectetur a. Sed sed risus pretium quam vulputate dignissim. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Malesuada pellentesque elit eget gravida cum sociis. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tincidunt id aliquet risus feugiat in ante. Tempus imperdiet nulla malesuada pellentesque elit eget. Adipiscing vitae proin sagittis nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Consequat nisl vel pretium lectus quam id leo in vitae. Est ultricies integer quis auctor. Lacus sed turpis tincidunt id aliquet risus feugiat.

              Donec ultrices tincidunt arcu non sodales neque sodales. Ultrices eros in cursus turpis massa. Purus in massa tempor nec feugiat. Non sodales neque sodales ut etiam sit. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Aliquet nec ullamcorper sit amet risus nullam. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Tempus egestas sed sed risus pretium quam. Ut faucibus pulvinar elementum integer enim neque. Egestas sed tempus urna et. Netus et malesuada fames ac.

              Ultrices sagittis orci a scelerisque purus semper eget duis at. Integer eget aliquet nibh praesent tristique magna sit amet. Posuere ac ut consequat semper viverra nam libero justo. Dui id ornare arcu odio ut. Elementum tempus egestas sed sed risus pretium. A scelerisque purus semper eget duis. Dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu dui vivamus arcu felis bibendum ut tristique. Quis risus sed vulputate odio. Vestibulum lectus mauris ultrices eros in cursus turpis massa.</Typography>
            </Container>
          </Paper>
      </Container>
    </div>
  );
}