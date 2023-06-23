import "../App.css";
import React from "react";
import "../assets/css/fonts.css"

export default function MissionPage(){
    return (
        <>
       <div className="container mission-container">
        <div className="mission-title"> Mission of Genius 1% <br></br>
    Club Community</div>
    <hr/>
    <div className="missions">
     <div className="mission">Making a world where every students find a genius teachers <span className="text-orange">24*7</span> across the world </div>
     <div className="mission">Making  <span className="text-orange"> Every School and College</span> 24*7 around the world </div>
     <div className="mission">We can create job that why every student<span className="text-orange"> Earn Money</span> using our Club </div>
     <div className="mission">Making <span className="text-orange">Self Independant</span> every genius young student and teachers who can use our Club </div>
     <div className="mission"><span className="text-orange">Building Equity </span> in education for 'every' student </div>
    </div>
       <div className = "next-button">Next</div>
      </div>
      </>
    )
    }