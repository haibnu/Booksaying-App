import React, {Component} from 'react';
import {
	TouchableHighlight,
	Text,
	View,
	StatusBar,
	Image
} from 'react-native';

import {
	Container,
	Header,
	Left,
	Right,
	Button,
	Icon,
	Body,
	Title,
} from 'native-base';

import Login from '../login';

import {Button as CButton} from '../button';

import {css} from '../../styles/css';

export default class Welcome extends Component{
	constructor(props){
		super(props);
		this.state = {
			pressStatus: false,
			signupStatus: false
		};
	}

	render(){
		return(
			<Container>
				<Image source={require('../../img/bg.png')} style={{flex: 1, resizeMode: 'cover'}}>
					<View style={{ paddingVertical:70, paddingHorizontal:45, alignItems: 'center' }}>
						<Image source={require('../../img/logo.png')} />
						<Text style={{ fontSize:11, fontWeight:'bold', color: '#50D688', width:295, marginTop:125 }}>ARAMIZA HOŞGELDİN</Text>
						<Text style={{ fontSize:26, lineHeight:31, fontWeight:'300', width:295, marginTop: 20 }}>Sevdiğin Sözler</Text>
						<Text style={{ fontSize:26, lineHeight:31, fontWeight:'300', width:295 }}>Havuzu</Text>
						<View style={{ alignItems:'stretch', borderWidth:2, borderColor:'#50D688', borderRadius:3, flexDirection:'row', marginTop:50 }}>
							<CButton
								backgroundColor='#50D688'
								textColor='white'
								style={css.welcomeButton}
								text="Giriş Yap"
								onPress={() => {
									this.props.navigator.push({
										id: 'Login'
									});
								}}
							/>
							<CButton
								backgroundColor='#50D688'
								textColor='white'
								style={[css.welcomeButton, {borderLeftWidth: 2, borderColor: '#50D688'} ]}
								text="Kayıt Ol"
								onPress={() => {
									this.props.navigator.push({
										id: 'Register'
									});
								}}
							/>
						</View>
					</View>
				</Image>
			</Container>
		);
	}
}
