import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends Component{
    render(){
        return(
            <nav className="nav">                
                <NavLink className="nav-item" activeClassName="active-link" exact to='/'>Home</NavLink>
                <NavLink className="nav-item" exact activeClassName='active-link' to='/projects'>Projects</NavLink>
            </nav>
        )
    }
}

export default Nav
