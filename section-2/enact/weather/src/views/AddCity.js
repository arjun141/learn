import Button from '@enact/moonstone/Button';
import {Panel, Header} from '@enact/moonstone/Panels';
import Input from '@enact/moonstone/Input';

import React from 'react';
import {connect} from 'react-redux';

import {addCity} from '../actions';

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
    onSubmit = () => {
        this.props.addCity(this.state.value);
        this.props.onBack()
    }

	render(){
        const {...props} = this.props;
        delete props.addCity;
        delete props.onBack;

        return (
            <Panel {...props}>
                <Header title="Add City" />
                <Input value={this.state.value} onChange={this.handleChange} />
                <Button onClick={this.onSubmit}>Search City</Button>
            </Panel>
        )
    }
}



export default connect(null, {addCity})(AddCityPanel);
