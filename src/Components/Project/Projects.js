import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

export default class Projects extends Component {

    render() {
        const { projects } = this.props
        return (
            <div className="projects-list">
                {projects.map((p)=>{
                    return(<ProjectCard skills={p.skills} title={p.title} description={p.description} img={p.image} links={p.links} />)
                })}
            </div>
        )
    }
}
