import React, { Component } from 'react';

import {
	View,
	StatusBar
} from 'react-native';

import {
	Button,
	Header, Left, Body, Right,
	Title
} from 'native-base';

import {css} from '../styles/css';

import Tabbar from './tabbar';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EditProfile extends Component{
	render(){
		return(
			<View style={ css.containerWrap }>
					<Header noShadow style={{ backgroundColor:'white' }}>
						<StatusBar
							backgroundColor='#BFBFBF'
						/>
						<Left>
							<Button
								transparent
								onPress={() => {
									this.props.navigator.pop();
								}}>
								<Icon size={24} name='chevron-left' style={{color: '#50D688' }} />
							</Button>
						</Left>
						<Body>
							<Title style={{ fontSize:12, fontWeight:'bold', color:'#4A4A4A' }}>PROFİLİM</Title>
						</Body>
					</Header>
			</View>
		);
	}
}
