import React from 'react';
import { Button } from '../Buttons/Button';
import {ButtonWhitCounter} from '../Buttons/ButtonWhitCounter';




export const ActionBar = () => {
	
	return (
		<div>
			<ul className='listActionBar'>

					<li><ButtonWhitCounter 
					src={'assets/actionBar/heart.png'} 	 
					srcAct={'assets/actionBar/heartRed.png'} 
					alt={'heart Icon'}/>
					</li>
					
					<li><Button 
							src={'assets/actionBar/add.png'}
							srcActive={'assets/actionBar/addBlack.png'}
							alt='add Icon'/></li>
					
					<li><Button 
					src={'assets/actionBar/tickets.png'} 
					srcActive={'assets/actionBar/ticketsBlack.png'}
					alt='tickets Icon '/></li>	
					
					<li><Button 
					src={'assets/actionBar/bubbleChat.png'} 
					alt='comments Icon'/></li>						

			 </ul>
		</div>
	)
}
