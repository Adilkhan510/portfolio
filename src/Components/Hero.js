import React, { Component, useState, useEffect } from 'react';
import Typical from 'react-typical';
import {Paper, Container, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  text : {
    fontFamily : "'Monoton', cursive;",
    fontSize: "20px",
    lineHeight : "60px"
  }
}))


const Skills = ()=>{
  const classes = useStyles()
  const [wait, setWait] = useState(false);

  const waitForIt = ()=> {
    setTimeout(()=>{
      setWait(true)
    },1000)
  }

  useEffect(()=>{
    waitForIt();
  })
  return (
    <Container>
      <Paper>
        <Typography className={classes.text}>Technical Skills : </Typography>
        <Typical className={classes.text}
          steps={wait ? ["JavaScript, React, Python, Node, Express, Firebase, MongoDB, and Postgres.",,4000] : ""}
          loop={Infinity}
          wrapper="p" />
      </Paper>
    </Container>
  )
}


  export default Skills
