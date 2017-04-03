import React, { Component } from 'react';

import {
	View,
	Text,
	StatusBar,
	TouchableHighlight,
	TextInput,
	UselessTextInput
} from 'react-native';

import {
	Header,
	Left,
	Body,
	Right,
	Button,
	Title,
	Grid,Row,Col,
	Picker
} from 'native-base';

import {css} from '../styles/css';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Add extends Component{
	render(){
		return(
			<View style={css.containerWrap}>
				<View style={{ backgroundColor:'white' }}>
					<Header noShadow style={{ backgroundColor:'white', alignItems:'stretch' }}>
						<StatusBar
							backgroundColor='#BFBFBF'
						/>
						<Left>
							<Button
								transparent
								onPress={() => {
									this.props.navigator.pop();
								}}>
								<Icon name='keyboard-arrow-left' size={24} style={{color: '#50D688'}} />
							</Button>
						</Left>
						<Body>
							<Title style={{ fontSize:12, fontWeight:'bold', color:'#4A4A4A' }}>EKLE</Title>
						</Body>
						<Right>
							<TouchableHighlight style={{ backgroundColor:'transparent' }}>
								<Text>PAYLAŞ</Text>
							</TouchableHighlight>
						</Right>
					</Header>
				</View>
				<Grid>
					<Row>
						<TextInput
		 					numberOfLines = {4}
							style={{ flex:1, height:200, textAlignVertical:'top' }}
							placeholder="İstediğini Yaz"
						/>
					</Row>
					<Row style={{ flex:1 }}>
						<Col>
							<Row>
							</Row>
							<Row>
							</Row>
							<Row>
							</Row>
							<Row>
							</Row>
						</Col>
					</Row>
				</Grid>
			</View>
		);
	}
}
