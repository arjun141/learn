import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {ActivityPanels} from '@enact/moonstone/Panels';
import Changeable from '@enact/ui/Changeable';
import React from 'react';

import MainPanel from '../views/MainPanel';
import AddCity from '../views/AddCity';

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
		handleSelectBreadcrumb: (ev, props) => {
			props.onNavigate({index: props.index-1});
		}
	},

	render: ({index, handleSelectBreadcrumb, navigateToCity, ...rest}) => {
		delete rest.onNavigate;
		return (
			<div {...rest}>
				<ActivityPanels onSelectBreadcrumb={handleSelectBreadcrumb} index={index}>
					<MainPanel onClick={navigateToCity}/>
					<AddCity />
				</ActivityPanels>
			</div>
		)
	}
});

export default Changeable({prop: 'index', change: 'onNavigate'}, MoonstoneDecorator(App));
