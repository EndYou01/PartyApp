import React from 'react'

import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className='top_header'>
            <nav>
                <ul className='header_container'>
                    <li>    
                        <Link to='/'>
                            <img src="icons/PARY.png" alt="pary"/>
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
                    <li>    
                        <Link to='/settings'>
                            <img src="icons/settings.png" alt="pary"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
