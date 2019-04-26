import Button from '@enact/moonstone/Button';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import {connect} from 'react-redux';

import CityList from '../components/list-view';
import {getWeatherInfo} from '../actions'

class MainPanel extends React.Component {
	constructor(props){
		super(props);
	}
	selectedCity = (city) => {
		this.props.getWeatherInfo(city);
		this.props.navigateToReport();
	}

	render(){
		const {cities, navigateToCity, ...props} = this.props;
		delete props.getWeatherInfo;
		delete props.navigateToReport;
		return (
			<Panel {...props}>
				<Header title="Weather" />
				<Button onClick={navigateToCity}>Add City</Button>
				<CityList selectedCity={this.selectedCity}/>
			</Panel>
		)
	}
}
export default connect(null, {getWeatherInfo})(MainPanel);
