import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends Component{
    render(){
        return(
            <nav className="nav">
                <NavLink exact activeClassName='active-link' to='/projects'>Projects</NavLink>
                <NavLink exact to='/aboutme'>About Me</NavLink>
            </nav>
        )
    }
}

export default Nav
