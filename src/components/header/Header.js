import React from 'react'

import { Link } from "react-router-dom";

export const Header = () => {
    
    return (
        <div className='div'>
            <nav className='header-container'>
                
                <div className='top_header'>
                    <Link to='/'>
                        <img height='30' width='80' src="icons/PARY.png" alt="pary"/>
                    </Link>

                    <Link to='/settings'>
                        <img height='30' width='40' src="icons/settings.png" alt="pary"/>
                    </Link>
                </div>
                    
                <ul className='bottom_content'>
                    <li>    
                        <Link to='/'>
                            <img src="icons/home.png" alt="pary"/>
                        </Link>
                    </li>
                    <li>    
                        
                        <Link to='/activity'>
                            <img src="icons/activity.png" alt="pary"/>
                        </Link>
                       
                    </li>
                    <li>    
                        
                        <Link to='/reservation'>
                            <img src="icons/reservation.png" alt="pary"/>
                        
                        </Link>
                    </li>
                    <li>    
                        
                        <Link to='/calendar'>
                            <img src="icons/calendar.png" alt="pary"/>
                       
                        </Link>
                    </li>
                    <li>    

                        <Link to='/notification'>
                            <img src="icons/notification.png" alt="pary"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
