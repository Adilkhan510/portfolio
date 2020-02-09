import React, { Component } from 'react'
import './Project.css'

export default class ProjectLinks extends Component {
    render() {
        return (
            <div className="project-links">
                <a  className="link"  href ='#'><i class="fab fa-github"></i></a>
                <a className="link" href ="#"><i class="fas fa-external-link-square-alt"></i></a>
            </div>
        )
    }
}
