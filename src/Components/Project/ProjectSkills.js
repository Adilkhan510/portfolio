import React, { Component } from 'react'
import './Project.css'

export default class ProjectSkills extends Component {
    render() {
        return (
            <div className="project-skills">
                {this.props.skills.map(p=>{
                    return <div className="project-skill">{p}</div>
                })}
            </div>
        )
    }
}

