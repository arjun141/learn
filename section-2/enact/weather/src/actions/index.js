import fetch from 'node-fetch';

const weatherAPIUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
export const key = 'dbe4639ad79a26aebc857aa22e0c7df0';

export const ADD_CITY = 'ADD_CITY';

export const GET_CITY_WEATHER = 'GET_CITY_WEATHER';

export const addCity = (city) => ({
    type: ADD_CITY,
    payload: {city}
});

export const getWeatherInfo = (city) => {
    return (dispatch) => {
        fetch(`${weatherAPIUrl}${city}&appid=${key}&units=metric`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
           return dispatch({type: GET_CITY_WEATHER, payload: {city, weather: json}})
        })
    }
}