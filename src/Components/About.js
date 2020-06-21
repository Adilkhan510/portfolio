import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import img from '../Images/62.jpg'
import Projects from './Project/Projects'
import { Typography, Container, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import svg from '../Svg/man.svg'
import styles from './Styles/about'
import Contact from './Contact'
import Skills from './Hero'
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
          <Paper className={classes.insideContainer} elevation={6}>
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
                  I am a software developer based out of <strong>San Francisco, Ca</strong>. I was introduced to programming through an upper level BioPsych lab in which we analyzed brain tissue using MatLab. After my initial exposure, I was curious enough to buy a python course on Udemy and have been learning ever since. <br />
                  Outside of programming, I like to play basketball, be active and take on new challenges. I believe in the idea of the best way to get the most out of life is by challenging your self. 
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
      <Container style={{width:"100vw"}}>
        <div className={classes.projectsContainer}>
          <Paper className={classes.projectsHeader} elevation={5}>
                <Typography className={classes.typography}>
                  My Projects
                </Typography>
            </Paper>
        </div>
        <Projects projects ={Content} style={{width : "100vw"}} />
        <Container className={classes.bottomNavigation}>
        <Contact />
      </Container>
      </Container>
    </div>
  );
}

export default withStyles(styles)(About)