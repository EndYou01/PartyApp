import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { ActivityPage } from '../pages/ActivityPage';
import { CalendarPage } from '../pages/CalendarPage';
import { IndexPage } from '../pages/IndexPage';
import { NotificationPage } from '../pages/NotificationPage';
import { ReservationPage } from '../pages/ReservationPage';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<IndexPage />}/>
                <Route path='/activity' element={<ActivityPage />} />
                <Route path='/reservations' element={<ReservationPage />} />
                <Route path='/calendar' element={<CalendarPage />}/>
                <Route path='/notification' element={<NotificationPage />} />
            </Routes>
        </BrowserRouter>
    )
}
