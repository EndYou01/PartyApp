import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='top_header'>
            <nav>
                <ul className='header_container'>
                    <li>    
                        <NavLink>
                            <img src="icons/PARY.png" alt="pary"/>
                        </NavLink>
                    </li>
                    <li>    
                        <NavLink>
                            <img src="icons/activity.png" alt="pary"/>
                        </NavLink>
                    </li>
                    <li>    
                        <NavLink>
                            <img src="icons/reservation.png" alt="pary"/>
                        </NavLink>
                    </li>
                    <li>    
                        <NavLink>
                            <img src="icons/calendar.png" alt="pary"/>
                        </NavLink>
                    </li>
                    <li>    
                        <NavLink>
                            <img src="icons/notification.png" alt="pary"/>
                        </NavLink>
                    </li>
                    <li>    
                        <NavLink>
                            <img src="icons/settings.png" alt="pary"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
