import { useState } from 'react'
import style from './Arrow.module.css'
import type { ArrowDirection } from '../../../shared/types/arrow.types'



type ArrowPropsType = {
    direction: ArrowDirection
}

export const Arrow = ({ direction }: ArrowPropsType) => {

    const [arrowDirection, setArrowDirection] = useState(direction)
  


    if (arrowDirection === 1) {
        return (
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" stroke-linecap="square" />
            </svg>
        )

    }

    if (arrowDirection === 3) {
        return (
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.70697 7.10696L4.0403 3.90696L0.70697 0.70696" stroke="black" stroke-linecap="square" />
            </svg>
        )


    }
}
