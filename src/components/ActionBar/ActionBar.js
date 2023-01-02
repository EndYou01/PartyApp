import React from 'react';
import { Button } from '../Buttons/Button';
import {ButtonWhitCounter} from '../Buttons/ButtonWhitCounter';
import heartIcon from '../../assets/actionBar/heart.png';
import heartRedIcon from '../../assets/actionBar/heartRed.png';
import addIcon from '../../assets/actionBar/add.png';
import addBlackIcon from '../../assets/actionBar/addBlack.png';
import ticketsIcon from '../../assets/actionBar/tickets.png';
import ticketsBlackIcon from '../../assets/actionBar/ticketsBlack.png';
import commentsIcon from '../../assets/actionBar/bubbleChat.png';
import '../../styles/styles.scss'

export const ActionBar = () => {
	


	return (
		<div>
			<ul className='listActionBar'>
					<li><ButtonWhitCounter 
					src={heartIcon} 	 
					srcAct={heartRedIcon} 
					alt={'heart Icon'}/>
					</li>
					
					<li><Button 
							src={addIcon}
							srcActive={addBlackIcon}
							alt='add Icon'/></li>
					
					<li><Button 
					src={ticketsIcon} 
					srcActive={ticketsBlackIcon}
					alt='tickets Icon '/></li>	
					
					<li><Button 
					src={commentsIcon} 
					alt='comments Icon'/></li>						
			 </ul>
		</div>
	)
}
