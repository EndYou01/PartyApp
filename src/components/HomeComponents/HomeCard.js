import React from 'react'
import { ActionBar } from '../ActionBar/ActionBar';

export const HomeCard = () => {
    return (
        <div className='card_intro'>
               
            <div className="card card_container">
                <img src="icons/PARY.png" height={200} className="card-img-top" alt="..."/>
            </div> 
            <ActionBar />

        </div>
    )
}
