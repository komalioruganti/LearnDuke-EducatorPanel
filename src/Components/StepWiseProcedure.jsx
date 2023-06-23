import "../App.css";
import React, { useState } from "react";
import "../assets/css/fonts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faChevronRight } from '@fortawesome/free-solid-svg-icons'



export default function StepWiseProcedure() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [hover5, setHover5] = useState(false);
    const onHover1 = () => {
        setHover1(true);
    };
    const onLeave1 = () => {
        setHover1(false);
    };
    const onHover2 = () => {
        setHover2(true);
    };
    const onLeave2 = () => {
        setHover2(false);
    };
    const onHover3 = () => {
        setHover3(true);
    };
    const onLeave3 = () => {
        setHover3(false);
    };
    const onHover4 = () => {
        setHover4(true);
    };
    const onLeave4 = () => {
        setHover4(false);
    };
    const onHover5 = () => {
        setHover5(true);
    };
    const onLeave5 = () => {
        setHover5(false);
    };
    return (
        <>
            <div className="procedure- conatiner container">
                <div className="procedure-title">
                    Let's Begin
                </div>
                <div className="box" onMouseEnter={onHover1} onMouseLeave={onLeave1}>
                <div className="step-box w-[80%] h-[12%] ml-auto mr-auto rounded-md mb-[5%]" >
                {!hover1 ? <>
                        <div className="step-number-u">STEP 1</div>
                        <FontAwesomeIcon icon={faArrowRight} size="2x" color="orange" className="arrow-right-icon" />
                        </>: <><div className="step-number-h"> 1</div>
                        <div className="step-title">Apply to Join the Club</div></>}
                    </div>
                </div>
                <div className="box" onMouseEnter={onHover2} onMouseLeave={onLeave2}>
                <div className="step-box w-[80%] h-[12%] ml-auto mr-auto rounded-md mb-[5%]" >
                {!hover2 ? <>
                        <div className="step-number-u">STEP 2</div>
                        <FontAwesomeIcon icon={faArrowRight} size="2x" color="orange" className="arrow-right-icon" />
                        </>: <><div className="step-number-h"> 2</div>
                        <div className="step-title">Go online during free time</div></>}
                    </div>
                </div>
                <div className="box" onMouseEnter={onHover3} onMouseLeave={onLeave3}>
                <div className="step-box w-[80%] h-[12%] ml-auto mr-auto rounded-md mb-[5%]" >
                {!hover3 ? <>
                        <div className="step-number-u">STEP 3</div>
                        <FontAwesomeIcon icon={faArrowRight} size="2x" color="orange" className="arrow-right-icon" />
                        </>: <><div className="step-number-h"> 3</div>
                        <div className="step-title">Accept Students Requests</div></>}
                    </div>
                </div>

                <div className="box" onMouseEnter={onHover4} onMouseLeave={onLeave4}>
                <div className="step-box w-[80%] h-[12%] ml-auto mr-auto rounded-md mb-[5%]" >
                {!hover4 ? <>
                        <div className="step-number-u">STEP 4</div>
                        <FontAwesomeIcon icon={faArrowRight} size="2x" color="orange" className="arrow-right-icon" />
                        </>: <><div className="step-number-h"> 4</div>
                        <div className="step-title">Help Millions with Video Call</div></>}
                    </div>
                </div>

                <div className="box" onMouseEnter={onHover5} onMouseLeave={onLeave5}>
                <div className="step-box w-[80%] h-[12%] ml-auto mr-auto rounded-md mb-[5%]" >
                {!hover5 ? <>
                        <div className="step-number-u">STEP 5</div>
                        <FontAwesomeIcon icon={faArrowRight} size="2x" color="orange" className="arrow-right-icon" />
                        </>: <><div className="step-number-h"> 5</div>
                        <div className="step-title">Get Premium Access to Club Benefits</div></>}
                    </div>
                </div>

                <div className = "next-button">
    <FontAwesomeIcon icon={faChevronRight} size="2x" />
   </div>
            </div>
        </>
    )
}