import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../Images/logo2.png'

class Nav extends Component{
    render(){
        return(
            <nav className="nav">
                <img src ={logo} style={{width : "90px", height : "60px", position: "absolute", left: "0", top : "0", borderRadius : "80px"}}/>                
                <NavLink className="nav-item" activeClassName="active-link" exact to='/'>Home</NavLink>
                <NavLink className="nav-item" exact activeClassName='active-link' to='/projects'>Projects</NavLink>
            </nav>
        )
    }
}

export default Nav
