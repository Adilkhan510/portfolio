import React from "react";
import { makeStyles } from '@material-ui/styles'
import {Grid, Typography} from '@material-ui/core'
import { softwareSkills } from "../../Content/skills";

const useStyles = makeStyles(theme=>({
  devIcons: {
    fontSize: "4rem",
    textAlign: "center",
    display : "flex",
    flexDirection : "column",
    justifyContent : "space-evenly",
    color: "#868e96",
    '&:hover': {
      color: "#645beb",
   },
  },
  softwareSkillsMain : {
    display : "flex",
  },
  softwareSkills : {
    color: "#868e96",
  },
}))

export default function SoftwareSkill() {
  const classes = useStyles()
  return (

    <Grid container spacing={2}>
      {softwareSkills.map(skills => {
            return (
              <Grid xs={4} sm={3} item className={classes.devIcons} name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <Typography>{skills.skillName}</Typography>
              </Grid>
            );
          })}
    </Grid>
  );
}