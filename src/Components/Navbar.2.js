import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Tabs, Tab } from '@material-ui/core'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import A from "../Images/logo2.png"
import styles from './Styles/navbar'

const useStyles = makeStyles(styles);

export default function ButtonAppBar() {
  const classes = useStyles();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    }
    if (window.location.pathname === "/projects" && value !== 1) {
      setValue(1)
    }
  })


  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <img src={A} className={classes.img} />
          <div className={classes.links}>
            <Link className={classes.link}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Typography className={classes.typography}>
                About
              </Typography>
            </Link>
            <Link className={classes.link}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-0}
              duration={500}
            >
              <Typography className={classes.typography}>
                Projects
              </Typography>
            </Link>
            <Link className={classes.link}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <Typography className={classes.typography}>
                Contact
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
}