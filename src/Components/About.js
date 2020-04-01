import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import img from '../Images/62.jpg'
import { Typography, Container, Box } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { withStyles } from '@material-ui/styles'
import Particles from 'react-particles-js'
import A from '../Images/A.png'
import svg from '../Svg/man.svg'
import styles from './Styles/about'
import Contact from './Contact'


function SimplePaper(props) {
  const [value, setValue] = useState(0)
  const { classes } = props 

  return (
    <div className={classes.root}>
      <Container className={classes.paper}>
          <Paper className={classes.insideContainer} elevation={6}>
          {/* <img src={A} className={classes.img} /> */}
            <Paper className={classes.title} elevation={5}>
              <Typography className={classes.typography}>
                About Me
              </Typography>
            </Paper>
            <Container className={classes.aboutMe}>
                <Typography paragraph={true}>
                  I am a software developer based out of <strong>San Francisco, Ca</strong>. I was introduced to programming through an upper level BioPsych lab in which we analyzed brain tissue using MatLab. After my initial exposure, I was curious enough to buy a python course on Udemy and have been learning ever since. <br />
                  Outside of programming, I like to play basketball, be active and take on new challenges. I believe in the idea of the best way to get the most out of life is by challenging your self. 
                </Typography>
            </Container>
          </Paper>
          <Paper className={classes.insideContainer} elevation={6}>
          {/* <img src={A} className={classes.img} /> */}
            <Paper className={classes.title} elevation={5}>
              <Typography className={classes.typography}>
                Skills  
              </Typography>
            </Paper>
            <Container>

            </Container>
          </Paper>
      </Container>
      <Container className={classes.bottomNavigation}>
        <Contact />
      </Container>
    </div>
  );
}

export default withStyles(styles)(SimplePaper)