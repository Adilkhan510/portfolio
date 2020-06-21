import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Fade from 'react-reveal/Fade';
import Projects from './Project/Projects'
import { Typography, Container, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import styles from './Styles/about'
import Contact from './Contact'
import SkillsIcons from "./Project/SkillsIcons"
import Content from '../Content/projects'
import config from 'react-reveal/globals';

config({ ssrFadeout: true });


function About(props) {
  const [value, setValue] = useState(0)
  const { classes } = props 

  return (
    <div className={classes.root}>
      <Container className={classes.paper}>
          <Paper className={classes.insideContainer} elevation={6} id="about">
          {/* <img src={A} className={classes.img} /> */}
            <Paper className={classes.title} elevation={5}>
              <Typography className={classes.typography}>
              <Fade ssrFadeout left >
                About Me
              </Fade>
              </Typography>
              </Paper>
            <Container className={classes.aboutMe}>
                <Typography className={classes.typography2} paragraph={true}>
                  I am a software developer based out of <strong>San Francisco, Ca</strong>. I was introduced to programming through an upper div neuroscience lab in which I analyzed brain cells using MatLab. After my initial exposure, I was truly fascinated by programming and the power it has to make an impact on our lifes. After graduating, I decided to enroll in a 12 week, 1000+ hours immersive programming bootcamp in order to be part of this ground breaking field. <br />
                  Outside of programming, I like to play basketball, be active and try new foods. I believe in the idea of the best way to get the most out of life is by challenging yourself. 
                </Typography>
            </Container>
          </Paper>
          <Paper className={classes.insideContainer} elevation={6}>
            <Paper className={classes.title} elevation={5}>
              <Typography className={classes.typography}>
              <Fade ssrFadeout left >
                Skills
              </Fade>
              </Typography>
            </Paper>
            <Container>
              {/* <Skills /> */}
              <SkillsIcons />
            </Container>
          </Paper>
      </Container>
      <Container style={{width:"100vw"}} id="projects">
        <div className={classes.projectsContainer}>
          <Paper className={classes.projectsHeader} elevation={5}>
                <Typography className={classes.typography}>
                  My Projects
                </Typography>
            </Paper>
        </div>
        <Projects projects ={Content} style={{width : "100vw"}} />
        <Container className={classes.bottomNavigation} id="contact">
        <Contact />
      </Container>
      </Container>
    </div>
  );
}

export default withStyles(styles)(About)