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
		this.state={
			pressStatus:false
		}
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
					{	this.state.pressStatus ? <Icon name="bookmark" style={css.footerTabIcon}/> : <Icon name="bookmark-border" style={css.footerTabIcon}/>
					}
						<Text style={css.footerTabText}>Sözlerim</Text>
					</Button>
					<Button onPress={() => {
								this.props.navigator.resetTo({
									id: 'Discovery'
								});
							}}
					>
						<MaterialCommunityIcons name="cards-outline" style={ css.footerTabIcon } />
						<Text style={ (DeviceInfo.getModel() == 'iPhone 5') ? css.footerTabText : css.footerTabText }>Keşfet</Text>
					</Button>
					<Button onPress={() => {
								this.props.navigator.resetTo({
									id: 'Add'
								});
							}}
					>
						<Icon name="add-circle-outline" style={css.footerTabIcon}/>
						<Text style={css.footerTabText}>Ekle</Text>
					</Button>
					<Button onPress={() => {
								this.props.navigator.resetTo({
									id: 'MyProfile'
								});
							}}
					>
						<Icon name="person-outline" style={css.footerTabIcon}/>
						<Text style={css.footerTabText}>Hesabım</Text>
					</Button>
					<Button onPress={() => {
								this.props.navigator.resetTo({
									id: 'Other'
								});
							}}>
						<Icon name="menu" style={css.footerTabIcon}/>
						<Text style={css.footerTabText}>Diğer</Text>
					</Button>
				</FooterTab>
			</Footer>
		);
	}
}
