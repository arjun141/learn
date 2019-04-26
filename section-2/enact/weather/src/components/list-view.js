import React from 'react';

import {connect} from 'react-redux';

const CityList = ({cities, selectedCity}) => (
    <ul>
        {cities.map((city, index) => (
            <li key={index} onClick={() => {selectedCity(city)}}><span>{city}</span></li>
        ))}
    </ul>
)

const mapStateToProps = ({cities}) => ({cities});

export default connect(mapStateToProps)(CityList);