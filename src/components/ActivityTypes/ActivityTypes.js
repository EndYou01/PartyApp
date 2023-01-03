import React from 'react'
import { ActivityCard } from './ActivityCard'

export const ActivityTypes = ({activityName}) => {
	return (
		<div className='activityType'>			
		<h2>{activityName}</h2>
			
		<div className='activityCardList'>	
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
		</div>
			
		</div>
	)
}
