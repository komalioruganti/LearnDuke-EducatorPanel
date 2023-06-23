import "../App.css";
import React from "react";
import "../assets/css/fonts.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function BenefitsPage(){
    return (
        <>
       <div className="container benefits-container ">
        <div className="mission-title benefits-title"> What's your benefits? </div>
    <hr className="bene-hr"/>
    <div className="y-benefits">
     <ol>
        <li className="benefit">1. Connecting Students Worldwide, Every Single Day!</li>
        <li className="benefit">2. Unlock the Power of Effective Communication!</li>
        <li className="benefit">3. Master the Art of Problem Solving!</li>
        <li className="benefit">4. Expand Your Network, Unlock Earning Potential Worldwide!</li>
        <li className="benefit">5. Learn, earn, and network with bright students globally</li>
     </ol>
    </div>
    <div className = "next-button">
    <FontAwesomeIcon icon={faChevronRight} size="2x" />
   </div>
   </div>
      </>
      )}