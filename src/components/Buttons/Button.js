import React, { useState } from 'react'
import '../../styles/styles.scss'
export const Button = ({src, alt}) => {
	
	const [isActive, setIsActive ] = useState(false)
	
	const actionSimpleButton = () => 
		setIsActive(!isActive)


	return (
		<>
			<button className='buttonComponent' onClick={actionSimpleButton}>
			
				<img className='iconButtonContainer' src={src} alt={alt} />
		
			</button>
		</>

	)
}

