import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { IndexPage } from '../pages/IndexPage';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<IndexPage />} />
               
            </Routes>
        </BrowserRouter>
    )
}
