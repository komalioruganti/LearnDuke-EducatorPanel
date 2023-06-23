import "../App.css";
import React, { useState } from "react";
import "../assets/css/fonts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank,faMoneyBill1Wave,faAward,faHandshakeAngle,faPlane,faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function BenefitsYouGet() {
    return (
        <>
            <div className="container">
                <div className="pt-11 font-semibold text-3xl">
                    The <span className="text-orange-400">Benefits</span> you'll get
                </div>
                <hr className="w-80 h-1.5"></hr>
                <div className="flex m-8">
                    <div className="benefit-box w-32 h-28 ml-7 mt-6">
                        <div className="w-16 h-16 bg-orange-400 rounded-full mr-auto ml-auto">
                        <FontAwesomeIcon icon={faPiggyBank} size="2x" color="white" className="mt-3"/></div>
                        <div className="text-xs font-semibold mt-3">Save Money on Purchases </div>
                        <div className="text-gray-500 text-xs">50% Discount on any course purchase</div>
                    </div>
                    <div className="benefit-box w-32 h-32 ml-7 mt-6">
                        <div className="w-16 h-16 bg-black rounded-full mr-auto ml-auto">
                            <FontAwesomeIcon icon={faMoneyBill1Wave} size="2x" color="white" className="mt-4"/>
                        </div>
                        <div className="text-xs font-semibold mt-3">Get Paid</div>
                        <div className="text-gray-500 text-xs">3 club rankers receive 10000 each per month</div>
                    </div>
                    <div className="benefit-box w-32 h-32 ml-7 mt-6">
                        <div className="w-16 h-16 bg-orange-400 rounded-full mr-auto ml-auto">
                        <FontAwesomeIcon icon={faAward} size="2x" color="white" className="mt-4"/>
                        </div>
                        <div className="text-xs font-semibold mt-3">Win award and Prizes </div>
                        <div className="text-gray-500 text-xs">Help 30 students to win amazing award and prizes</div>
                    </div>
                </div>
                <div className="flex mt-7">
                    <div className="benefit-box w-36 h-32 ml-24 mt-6">
                        <div className="w-16 h-16 bg-orange-400 rounded-full mr-auto ml-auto">
                        <FontAwesomeIcon icon={faHandshakeAngle} size="2x" color="white" className="mt-4"/>
                        </div>
                        <div className="text-xs font-semibold mt-3">Get Education support </div>
                        <div className="text-gray-500 text-xs">Unlocking Your Dreams: Education Loans On-Demand!</div>
                    </div>
                    <div className="benefit-box w-36 h-32 ml-7 mt-6">
                        <div className="w-16 h-16 bg-orange-400 rounded-full mr-auto ml-auto">
                            <FontAwesomeIcon icon={faPlane} size="2x" color="white" className="mt-4"/>
                        </div>
                        <div className="text-xs font-semibold mt-3">Travel internationally </div>
                        <div className="text-gray-500 text-xs">10 club rankers travel internationally every year</div>
                    </div>
                </div>
                <div className = "next-button mt-5">
                    <FontAwesomeIcon icon={faChevronRight} size ="2x"/>
                </div>
            </div>
        </>
    )
}