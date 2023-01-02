import React from 'react';
import { useActive } from '../../hooks/useActive';
import '../../styles/styles.scss'

export const ButtonWhitCounter = ({src,srcAct ,alt}) =>{


	 const {counter, isActive, actionCounterButton } = useActive()

	return(
		<div className='buttonCounter'>
			<button className='buttonComponent' onClick={actionCounterButton} >

				<img className='iconButtonContainer' src={isActive ? srcAct : src} alt={alt} />
			
			</button>	

			<b><span>{counter}</span></b>

		</div>
	)
}
