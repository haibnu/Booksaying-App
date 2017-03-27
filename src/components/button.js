import React, {Component} from 'react';
import {
	TouchableHighlight,
	Text,
	View,
	StatusBar,
	Image,
	StyleSheet,
} from 'react-native';


export class Button extends Component {
	state = {
		pressStatus: false
	}

	onHideUnderlay(){
		this.setState({
			pressStatus: false
		});
	}
	onShowUnderlay(){
		this.setState({
			pressStatus: true
		});
	}

	render() {
		return (
			<TouchableHighlight
				{...this.props}
				underlayColor={this.props.backgroundColor}
				onHideUnderlay={this.onHideUnderlay.bind(this)}
				onShowUnderlay={this.onShowUnderlay.bind(this)}
			>
				<Text
					style={ this.state.pressStatus ? { color: this.props.textColor, fontSize:15, fontWeight:'600' } : { color: this.props.backgroundColor, fontSize:15, fontWeight:'600' } }>
					{this.props.text}
				</Text>
			</TouchableHighlight>
		);
	}
}
