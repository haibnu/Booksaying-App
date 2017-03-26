import React, {Component} from 'react';
import {
	TouchableHighlight,
	Text,
	View,
	StatusBar,
	Image
} from 'react-native';

import {Container} from 'native-base';
import Login from '../login';

const style = require('../../styles/main');

export default class Welcome extends Component{
	constructor(props){
		super(props);
		this.state = {
			pressStatus: false,
			signupStatus: false
		};
	}
	_onHideUnderlay(){
		this.setState({
			pressStatus: false
		});
	}
	_onHideUnderlay2(){
		this.setState({
			signupStatus: false
		});
	}
	_onShowUnderlay(){
		this.setState({
			pressStatus: true
		});
	}
	_onShowUnderlay2(){
		this.setState({
			signupStatus: true
		});
	}
	render(){
		return(
			<Image source={require('../../img/bg.png')} style={{flex: 1, resizeMode: 'cover'}}>
				<Container style={{ paddingVertical:70, paddingHorizontal:45, flex:1, alignItems: 'center' }}>
					<Image source={require('../../img/logo.png')} />
					<Text style={{ fontSize:11, fontWeight:'bold', color: '#50D688', width:295, marginTop:125 }}>ARAMIZA HOŞGELDİN</Text>
					<Text style={{ fontSize:26, lineHeight:31, fontWeight:'300', width:295, marginTop: 20 }}>Sevdiğin Sözler     Havuzu</Text>
					<View style={{ alignItems:'stretch', borderWidth:2, borderColor:'#50D688', borderRadius:3, flexDirection:'row', marginTop:50 }}>
						<TouchableHighlight
							style={style.welcomeButton}
							underlayColor='#50D688'
							onHideUnderlay={this._onHideUnderlay.bind(this)}
							onShowUnderlay={this._onShowUnderlay.bind(this)}
							onPress={() => {
								this.props.navigator.push({
									id: 'Login',
									name: 'Login'
								});
							}}>
							<Text style={ this.state.pressStatus ? { color:'white', fontSize:15, fontWeight:'600' } : { color:'#50D688', fontSize:15, fontWeight:'600' } }>Giriş Yap</Text>
						</TouchableHighlight>
						<TouchableHighlight
							underlayColor='#50D688'
							onHideUnderlay={this._onHideUnderlay2.bind(this)}
							onShowUnderlay={this._onShowUnderlay2.bind(this)}
							onPress={() => {
								this.props.navigator.push({
									id: 'Login',
									name: 'Login'
								});
							}}
							style={[style.welcomeButton,{borderLeftWidth:2, borderLeftColor:'#50D688'}]}>
							<Text style={ this.state.signupStatus ? { color:'white', fontSize:15, fontWeight:'600' } : { color:'#50D688', fontSize:15, fontWeight:'600' } }>Kayıt Ol</Text>
						</TouchableHighlight>
					</View>
				</Container>
			</Image>
		);
	}
}
