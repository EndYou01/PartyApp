
import { useState } from 'react'
import { useCounter } from './useCounter'

export const useActive = ( isActiveBool ) => {
	
	const[counter, increment, decrement ] = useCounter

	const [isActive, setIsActive] = useState(isActiveBool)

	const actionCounterButton = () => {
		if(isActive){
			decrement()
			setIsActive(false)
		}else{
			increment()
			setIsActive(true)
		}
	}

	const actionSimpleButton = () => {
		isActive
		?
		setIsActive(false)
		:
		setIsActive(true)
		}
		return [
			isActive,
			counter,
			actionCounterButton,
			actionSimpleButton
		]
}

