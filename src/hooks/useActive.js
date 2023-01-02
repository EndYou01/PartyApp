import React, { useState } from 'react'
import { useCounter } from './useCounter'

export const useActive = () => {


	const {counter, increment, decrement} = useCounter()

	const [isActive, setIsActive] = useState(false)

	const actionSimpleButton = () =>
		setIsActive(!isActive)


	const actionCounterButton = () => {
		if (isActive) {
			decrement()
		} else {
			increment()
		}
		setIsActive(!isActive)
	}

	return({
		counter,
		isActive,
		actionCounterButton,
		actionSimpleButton
	})

}
