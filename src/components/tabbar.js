import React, {Component} from 'react';
import {
	TouchableHighlight,
	Text,
	View,
	StatusBar,
	Image,
	StyleSheet,
	ListView
} from 'react-native';

import {
	Button,
	Footer,
	FooterTab,
} from 'native-base';

import {css} from '../styles/css';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DeviceInfo from 'react-native-device-info';

console.log(DeviceInfo.getModel());

export default class Tabbar extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Footer style={{ height:49 }}>
				<FooterTab style={{ backgroundColor:'#FFFFFF' }}>
					<Button
							onPress={() => {
								this.props.navigator.resetTo({
									id: 'MyFeed'
								});
							}}
					>
						<Icon name={this.props.nameFeed} style={this.props.styleFeed}/>
						<Text style={this.props.textFeed}>Sözlerim</Text>
					</Button>
					<Button onPress={() => {
								this.props.navigator.resetTo({
									id: 'Discovery'
								});
							}}
					>
						<MaterialCommunityIcons name={this.props.nameDiscovery} style={ this.props.styleDiscovery } />
						<Text style={ (DeviceInfo.getModel() == 'iPhone 5') ? this.props.textDiscovery : this.props.textDiscovery }>Keşfet</Text>
					</Button>
					<Button onPress={() => {
								this.props.navigator.resetTo({
									id: 'Add'
								});
							}}
					>
						<Icon name={this.props.nameAdd} style={this.props.styleAdd}/>
						<Text style={this.props.textAdd}>Ekle</Text>
					</Button>
					<Button onPress={() => {
								this.props.navigator.resetTo({
									id: 'MyProfile'
								});
							}}
					>
						<Icon name={this.props.nameProfile} style={this.props.styleProfile}/>
						<Text style={this.props.textProfile}>Hesabım</Text>
					</Button>
					<Button onPress={() => {
								this.props.navigator.resetTo({
									id: 'Other'
								});
							}}>
						<Icon name={this.props.nameOther} style={this.props.styleOther}/>
						<Text style={this.props.textOther}>Diğer</Text>
					</Button>
				</FooterTab>
			</Footer>
		);
	}
}
