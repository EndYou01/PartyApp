
import { useState } from 'react'
import { useCounter } from './useCounter'

export const useActive = () => {
	
	const[counter, increment, decrement ] = useCounter

	const [isActive, setIsActive] = useState(false)

	const actionCounterButton = () => {
		if(isActive){
			decrement()
		}else{
			increment()
		}
		setIsActive(!isActive)
	}

	const actionSimpleButton = () => 
		setIsActive(!isActive)
	
		return {
			isActive,
			counter,
			actionCounterButton,
			actionSimpleButton
		}
}

