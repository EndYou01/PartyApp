import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Header } from '../components/Header/Header';

import { ActivityPage } from '../pages/ActivityPage';
import { CalendarPage } from '../pages/CalendarPage';
import { HomePage } from '../pages/HomePage';
import { NotificationPage } from '../pages/NotificationPage';
import { ReservationPage } from '../pages/ReservationPage';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Routes>
                <Route path='/*' element={<HomePage/>}/>
                <Route path='/activity' element={<ActivityPage />} />
                <Route path='/reservation' element={<ReservationPage />} />
                <Route path='/calendar' element={<CalendarPage />}/>
                <Route path='/notification' element={<NotificationPage />} />
            </Routes>
        </BrowserRouter>
    )
}
