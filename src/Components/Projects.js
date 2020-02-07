import React, { Component } from 'react'
import netflix from '../Images/netflix.png'

class Projects extends Component{
    
    render(){
        return(
            <div className="Projects">
                <div className="card">
                    <div className="card-main">
                        <img className="card-img" src={netflix} />
                        <p>loremipsumsfasd
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="#">Projects</a>
                        <a href="#">Projects</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-main">
                        <img className="card-img" src={netflix} />
                        <p>loremipsumsfasd
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="#">Projects</a>
                        <a href="#">Projects</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-main">
                        <img className="card-img" src={netflix} />
                        <p>loremipsumsfasd
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="#">Projects</a>
                        <a href="#">Projects</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-main">
                        <img className="card-img" src={netflix} />
                        <p>loremipsumsfasd
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="#">Projects</a>
                        <a href="#">Projects</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Projects