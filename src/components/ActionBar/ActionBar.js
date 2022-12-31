import React from 'react';
import { Button } from '../Buttons/Button';
import {ButtonWhitCounter} from '../Buttons/ButtonWhitCounter';

// import heartIcon from '../../assets/actionBar/heart.png';
// import heartRedIcon from '../../assets/actionBar/heartRed.png';
// import addIcon from '../../assets/actionBar/add.png';
// import addBlackIcon from '../../assets/actionBar/addBlack.png';
// import ticketsIcon from '../../assets/actionBar/tickets.png';
// import ticketsBlackIcon from '../../assets/actionBar/ticketsBlack.png';
// import commentsIcon from '../../assets/actionBar/bubbleChat.png';

export const ActionBar = () => {
	

	return (
		<div>
			<ul className='listActionBar'>
					<li><ButtonWhitCounter src='assets/actionBar/heart.png' alt={'heart Icon'} /></li>
					<li><Button src='assets/actionBar/add.png' alt='add Icon' /></li>
					<li><Button src='assets/actionBar/tickets.png' alt='tickets Icon '/></li>	
					<li><Button src='assets/actionBar/bubbleChat.png' alt='comments Icon'/></li>						
			 </ul>
		</div>
	)
}
