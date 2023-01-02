import React from 'react'
import { useActive } from '../../hooks/useActive'
import '../../styles/styles.scss'
export const Button = ({src, srcActive, alt,}) => {
	

	const {isActive, actionSimpleButton } = useActive()


	return (
		<>
			<button className='buttonComponent' onClick={actionSimpleButton}>
			
				<img className='iconButtonContainer' src={isActive ? srcActive : src} alt={alt} />
		
			</button>
		</>

	)
}

