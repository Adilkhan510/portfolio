import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Fade from "react-reveal/Fade";
import Projects from "./Project/Projects";
import { Typography, Container, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./Styles/about";
import Contact from "./Contact";
import SkillsIcons from "./Project/SkillsIcons";
import Content from "../Content/projects";
import config from "react-reveal/globals";
import img from "../Images/freelancer.svg";

config({ ssrFadeout: true });

function About(props) {
  const [value, setValue] = useState(0);
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Container className={classes.paper}>
        <Paper className={classes.insideContainer} elevation={6} id="about">
          <Paper className={classes.title} elevation={5}>
            <Typography className={classes.typography}>
              <Fade ssrFadeout left>
                About Me
              </Fade>
            </Typography>
          </Paper>
          <Container className={classes.aboutMe}>
            <Typography className={classes.typography2} paragraph={true}>
              I am a software developer based out of{" "}
              <strong>San Francisco, Ca</strong>. I <strong>LOVE</strong>{" "}
              working with react, and building a clean frontend.
              <br />
              <strong>
                Please feel free to reach out to me on LinkedIn or via email to
                discuss any potential opportunities.
              </strong>
            </Typography>
          </Container>
        </Paper>
        <Paper className={classes.insideContainer} elevation={6}>
          <Paper className={classes.title} elevation={5}>
            <Typography className={classes.typography}>
              <Fade ssrFadeout left>
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
      <Container style={{ width: "100vw" }} id="projects">
        <div className={classes.projectsContainer}>
          <Paper className={classes.projectsHeader} elevation={5}>
            <Typography className={classes.typography}>My Projects</Typography>
          </Paper>
        </div>
        <Projects projects={Content} style={{ width: "100vw" }} />
        <Container className={classes.bottomNavigation} id="contact">
          <Contact />
        </Container>
      </Container>
    </div>
  );
}

export default withStyles(styles)(About);
