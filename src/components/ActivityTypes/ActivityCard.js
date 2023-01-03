import React from 'react'

export const ActivityCard = ({srcImg = 'icons/PARY.png', altText, cost, horary}) => {
	return (
		<div className='activityCard'>
			<img className='imgActivity' src={srcImg} alt={altText} />
			
			<div>
				<p>{cost}</p>
				<p>{horary}</p>
			</div>
		</div>
	)
}
