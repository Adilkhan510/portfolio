import React, { Component } from 'react';
import Typical from 'react-typical';
import img from '../Images/62.jpg'


class Landing extends Component {
    render () { 
      return (
          <div className="about">
            <div className="about-window">
              <div className="about-window-top">
                <div className="about-top-button green"></div>
                <div className="about-top-button red"></div>
                <div className="about-top-button yellow"></div>
              </div>
              <div className="about-window-bottom">
                <div className="bottom-big">
                  <img className="profile-img" src={img} />
                  <h3 className="big-text">Hi, I am Adil Khan</h3>
                </div>

                <p className="about-window-bottom-p">
                <Typical className="para"
                steps={[
                  `>{Technical skills : 'JavaScript', 'Node', 'Express', 'MongoDB', 'React', 'HTML', 'CSS', 'Python'}`,2000]}
                // steps={[' {Programmer 😎', 1000, ' First Generation College  Graduate 🎓', 1000, ' Leader😁', 1000, ' Self-motivated Learner 🤓', 1000 ,' Hooper 🏀', 1000,]}
                loop={Infinity}
                wrapper="p" />
                <Typical className="para"
                steps={[
                  `>{Hobbies : 'Playing Basketball', 'Reading scientific articles', learning new technologies} `,2000]}
                // steps={[' {Programmer 😎', 1000, ' First Generation College  Graduate 🎓', 1000, ' Leader😁', 1000, ' Self-motivated Learner 🤓', 1000 ,' Hooper 🏀', 1000,]}
                loop={Infinity}
                wrapper="p" />
                <Typical className="para"
                steps={[
                  `>Contact info : {email : 'adilkhan@ucsb.edu', linkedIn : https://www.linkedIn.com/in/adilmuneerkhan } `,2000]}
                // steps={[' {Programmer 😎', 1000, ' First Generation College  Graduate 🎓', 1000, ' Leader😁', 1000, ' Self-motivated Learner 🤓', 1000 ,' Hooper 🏀', 1000,]}
                loop={Infinity}
                wrapper="p" />
              </p>
              </div>
            </div>

          </div>
      )
    }
  }

  export default Landing
