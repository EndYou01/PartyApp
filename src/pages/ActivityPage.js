import React from 'react'
import { ActivityTypes } from '../components/ActivityTypes/ActivityTypes'

export const ActivityPage = () => {
    return (
        <div className='activityPages' >
            <h1>Actividades</h1>

            < div className='activityList'>
            <ActivityTypes activityName='Eventos' />
            
            <ActivityTypes activityName='Bares' />
            </div>
        </div>
    )
}
