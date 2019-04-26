import {ADD_CITY} from '../actions'
let initialCities = window.localStorage.getItem('cities');

const initialState = initialCities ? JSON.parse(initialCities) : [];

export const cities = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_CITY:
            if(state.includes(payload.city)){
                return state;
            }
            window.localStorage.setItem('cities', JSON.stringify([...state, payload.city]))
            return [...state, payload.city];
        default:
            return state;
    }
}