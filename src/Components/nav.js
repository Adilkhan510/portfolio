import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Projects from '../Components/Projects'

class Nav extends Component{
    render(){
        return(
            <nav className="nav">
                <NavLink exact activeClassName='active-link' to='/projects'>Projects</NavLink>
            </nav>
        )
    }
}

export default Nav
