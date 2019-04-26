import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {ActivityPanels} from '@enact/moonstone/Panels';
import Changeable from '@enact/ui/Changeable';
import React from 'react';

import MainPanel from '../views/MainPanel';
import AddCity from '../views/AddCity';
import WeatherReport from '../views/WeatherReport';

import css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},
	handlers:{
		navigateToCity: (ev, {onNavigate}) => {
			onNavigate({index: 1})
		},
		handleSelectBreadcrumb: (ev, {onNavigate, index}) => {
			onNavigate({index: index-1});
		},
		navigateToMainPanel: (ev, {onNavigate}) => {
			onNavigate({index: 0})
		},
		navigateToReport: (ev, {onNavigate}) => {
			onNavigate({index: 2});
		}
	},

	render: ({index, handleSelectBreadcrumb, navigateToCity, navigateToMainPanel, navigateToReport, ...rest}) => {
		delete rest.onNavigate;
		return (
			<div {...rest}>
				<ActivityPanels onSelectBreadcrumb={handleSelectBreadcrumb} index={index}>
					<MainPanel navigateToCity={navigateToCity} navigateToReport={navigateToReport}/>
					<AddCity onBack = {navigateToMainPanel}/>
					<WeatherReport />
				</ActivityPanels>
			</div>
		)
	}
});

export default Changeable({prop: 'index', change: 'onNavigate'}, MoonstoneDecorator(App));
