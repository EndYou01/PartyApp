import React, { useState } from 'react'
import { useActive } from '../../hooks/useActive'

export const Button = ({src, alt}) => {
	
	const [isActive, actionSimpleButton] = useActive(false)
 

	return (
		<>
			<button onClick={actionSimpleButton}>
			
				<img src={src} alt={alt} />
		
			</button>
		</>

	)
}

