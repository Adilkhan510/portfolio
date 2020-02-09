import React, { Component } from 'react'
import ProjectSkills from './ProjectSkills'
import ProjectLinks from './ProjectLinks'
import './Project.css'

export default class ProjectCard extends Component {
    render() {
        const {skills, description, img, links, title} = this.props
        return (
            <div className="project-card">
                <img className="project-image"  />
                <div className="project-background" />
                <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <ProjectSkills skills={skills} />
                <ProjectLinks links={links} />
                </div>
            </div>
        )
    }
}
