import React, { Component, } from 'react'
import './Project.css'
import { Typography, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    skills : {
        margin: "0 10px 3px 3px",
        border: "2px solid rgba(31, 230, 233, 0.653)",
        padding: "5px",
        fontSize: "0.8em",
        borderRadius: "8px"
    }
}))


const ProjectSkills = (props)=> {
    const classes = useStyles()
    return (
        <div className="project-skills">
            {props.skills.map(p=>{
                return (
                <Paper className={classes.skills}>
                    {p}
                </Paper>
                )
            })}
        </div>
    )
}

export default ProjectSkills