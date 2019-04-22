import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import Input from '@enact/moonstone/Input';

import React from 'react';

class AddCityPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    handleChange = (ev) => {
        this.setState({value: ev.value});
    }
	render(){
        return (
            <Panel {...this.props}>
                <Header title="Add City" />
                <Input value={this.state.value} onChange={this.handleChange} />
                <Button>Search City</Button>
            </Panel>
        )
    }
}

export default AddCityPanel;
