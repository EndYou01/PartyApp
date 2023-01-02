import React from 'react'
import { HomeCard } from './HomeCard'
import {data} from '../../data/data'

export const HomeList = () => {

    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn m-auto' style={{maxWidth: 420}}>{
            data.map( card => (
                <HomeCard key={card.id}{...card}/>
            ))
        }
          </div>
    )
}
