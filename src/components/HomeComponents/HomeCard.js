import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { HiOutlineTicket } from "react-icons/hi";
import { VscComment } from "react-icons/vsc";

export const HomeCard = () => {
    return (
        <div className="card card_container">
            <img src="icons/PARY.png" height={200} className="card-img-top" alt="..."/>
            <div className="card-body card_contain">
                <AiOutlineHeart/>
                <GrAdd/>
                <HiOutlineTicket/>
                <VscComment/>
            </div>
        </div>
    )
}
