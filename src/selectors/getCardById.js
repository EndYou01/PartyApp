import {data} from '../data/data'

export const getCardById = (id) => {
    
    return data.find( data => data.id === id)
}