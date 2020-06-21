import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import Fade from 'react-reveal/Fade';

export default class Projects extends Component {

    render() {
        const { projects } = this.props
        return (
            <Fade bottom>
            <div className="projects-list">
                {projects.map((p)=>{
                    return(<ProjectCard skills={p.skills} title={p.title} description={p.description} img={p.image} links={p.links} />)
                })}
            </div>
            </Fade>
        )
    }
}
