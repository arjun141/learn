import {GET_CITY_WEATHER} from '../actions'

const initialState = {city: '', weather: {}}

export const weathers = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_CITY_WEATHER:
            return {...state, ...{city: payload.city, weather: payload.weather}};
        default:
            return state;
    }
}