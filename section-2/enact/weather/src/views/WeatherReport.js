import React from 'react';
import {Panel, Header} from '@enact/moonstone/Panels';
import BodyText from '@enact/moonstone/BodyText';

import {connect} from 'react-redux';

const onweatherload = (details) => (
    <div>
        <Header 
        title={details.city} 
        titleBelow={details.weather.weather[0].description}/>
        <BodyText>Temperature: {details.weather.main.temp} c</BodyText>
        <BodyText>Temperature Min: {details.weather.main.temp_min} c</BodyText>
        <BodyText>Temperature Max: {details.weather.main.temp_max} c</BodyText>
    </div>
)

const WeatherReport = ({weatherReport, ...props}) => {
    delete props.dispatch;
    return (
        <Panel {...props}>
        {
            weatherReport.weather.main ? (onweatherload(weatherReport)) : 'Loading... Please wait'
        }
    </Panel>
    )
}

const mapStateToProps = ({weathers}) => ({weatherReport: weathers})

export default connect(mapStateToProps)(WeatherReport)

