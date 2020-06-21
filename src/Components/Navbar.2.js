import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Tabs, Tab } from '@material-ui/core'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import A from "../Images/logo2.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background : theme.palette.primary
  },
  title: {
    flexGrow: 1,
    color : "#ffffff"
  },
  tabsContainer : {
      marginLeft : "auto"
  },
  tab : {
      fontSize : "1rem",
      textTransform : "none",
      fontWeight : "700",
      minWidth : "10",
      color : "#000000"
  },
  img : {
    borderRadius : "100px",
    height : "60px",
    width : "60px",
    padding: "5px"
  },
  toolbar : {
    ...theme.mixins.toolbar
  },
  link : {
    textTransform : "none",
    fontSpacing : "-0.5px",
    fontWeight : "800",
    fontSize : "1.2rem",
    margin : "0 0.5rem",
    fontFamily: "'Montserrat', sans-serif",
  },
  links : {
    marginLeft : "auto"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
      if(window.location.pathname === "/" && value !== 0){
          setValue(0)
      }
      if(window.location.pathname === "/projects" && value !== 1){
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
                    offset={-70}
                    duration={500}
                    onClick={scrollToTop}>About</Link>
          <Link className={classes.link}
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={scrollToTop}>Projects</Link>
          <Link className={classes.link}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={scrollToTop}>Contact</Link>
            </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
}