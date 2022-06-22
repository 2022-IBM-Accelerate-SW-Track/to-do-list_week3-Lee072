import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/myPicture.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Mia Lee</div>
            <div className="brief_description">
              I enjoy listening to music and researching topics related
              to cybersecurity and robotics. I also spend a lot of time playing videogames
              with my friends online.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
