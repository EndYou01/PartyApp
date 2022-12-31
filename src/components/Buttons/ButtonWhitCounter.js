import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../../styles/styles.scss'

export const ButtonWhitCounter = ({src, alt}) =>{

	const [isActive, setIsActive] = useState(false)
	const {counter, decrement, increment} = useCounter()


	const actionCounterButton = () => {
		if(isActive){
			decrement()
		}else{
			increment()
		}
		setIsActive(!isActive)
	}
	return(
		<div className='buttonCounter'>
			<button className='buttonComponent' onClick={actionCounterButton} >

				<img className='iconButtonContainer' src={src} alt={alt} />
			
			</button>	

			<b><span>{counter}</span></b>

		</div>
	)
}
