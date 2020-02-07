import React, { Component } from 'react';
import Typical from 'react-typical';
import img from '../Images/62.jpg'


class Landing extends Component {
    render () { 
      return (
          <div className="Landing">
              <img src={img} />
              <h3>Hi, I am Adil Khan</h3>
              <p className="Landing">
                I'm a  {' '} <Typical className="para"
                steps={[' Programmer 😎', 1000, ' First Generation College  Graduate 🎓', 1000, ' Leader😁', 1000, ' Self-motivated Learner 🤓', 1000 ,' Hooper 🏀', 1000,]}
                loop={Infinity}
                wrapper="p" />
              </p>
          </div>
      )
    }
  }

  export default Landing
