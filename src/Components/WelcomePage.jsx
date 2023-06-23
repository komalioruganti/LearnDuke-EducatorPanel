import "../App.css";
import React from "react";
import "../assets/css/fonts.css"
import "../assets/images/next.png";
import animation from "../assets/lottie-animation/animation.json";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'


export default function WelcomePage(){
return (
    <>
   <div className="container">
   <div className="animation">
   <Lottie animationData={animation}></Lottie>
   </div>
    <div className="title"> Welcome to the <br></br>
Genius 1% Club</div>
<div className="welcome-content">For Genius students and teachers who can create impact on society by helping millions! students around the world. </div>
   <button className="register-now-button">Register Now</button>
   <div className = "next-button">
    <FontAwesomeIcon icon={faChevronRight} size="2x" />
   </div>
  </div>
  </>
)
}