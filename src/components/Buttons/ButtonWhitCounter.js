import React, { useState } from 'react';
import { useActive } from '../../hooks/useActive';




export const ButtonWhitCounter = ({src, alt}) =>{

 const [counter, isActive, actionCounterButton ] = useActive(false)

	return(
		<>
			<button onClick={actionCounterButton} >

				<img src={src} alt={alt} />
			
			</button>	


			 <p>{counter}</p>
		</>
	)
}
