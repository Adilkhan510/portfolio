import React, { Component } from 'react'
import { Paper, Typography, makeStyles, Container } from '@material-ui/core'
import ProjectSkills from './ProjectSkills'
import ProjectLinks from './ProjectLinks'
import './Project.css'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: "1rem",
        width: "auto",
        [theme.breakpoints.up('lg')]: {
            width: "50%"
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    projectCard: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: "60px",
        backgroundColor: "white",
        borderRadius: "4px",
        boxShadow: "0 50px 100px rgba(50, 50, 93, 0.05),0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        height: "auto"
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '20px',
        fontWeight: "bold",
        margin: "5px",
        textAlign: "center",
        color: "white",
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: "white",
        backgroundColor: "#D58180",
        [theme.breakpoints.up('md')]: {
            fontSize: "1rem",
            fontWeight: "bold",
            margin: "5px",
            textAlign: "center",
            padding: "5px",
            color: "white",
        }
    },
    description: {
        color: "grey",
        letterSpacing: "-0.5px",
        fontFamily: "'Lato', sans-serif",
        fontSize: '1rem',
        fontWeight: "light",
        padding: "0.4rem",
        margin: "50px 0",
        [theme.breakpoints.up('md')]: {
            fontSize: "1rem",
            fontWeight: "light",
            padding: "10px"
        }
    }

}))



const ProjectCard = (props) => {
    const { skills, description, img, links, title } = props
    const classes = useStyles()
    return (
        <Container className={classes.projectCard}>
            <img className="project-image" src={img} />
            <div className={classes.paper}>
                <Typography className={classes.typography}>{title}</Typography>
                <Typography className={classes.description}>{description}</Typography>
                <ProjectSkills skills={skills} />
                <ProjectLinks links={links} />
            </div>
        </Container>
    )
}

export default ProjectCard