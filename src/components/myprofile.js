import React, { Component } from 'react';

import {
	View,
	Image,
	StyleSheet,
	StatusBar,
	Text,
	TouchableHighlight
} from 'react-native';

import {
	Header,
	Body,
	Title,
	Grid, Col, Row,
	Button
} from 'native-base';

import {css} from '../styles/css';

import Tabbar from './tabbar';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MyProfile extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View style={ css.containerWrap }>
				<View style={{ backgroundColor:'white' }}>
					<Header noShadow style={{ backgroundColor:'white', borderBottomColor:'transparent' }}>
						<StatusBar backgroundColor='#BFBFBF' />
						<Body>
							<Title style={{ fontSize:12, fontWeight:'bold', color:'#4A4A4A' }}>PROFİLİM</Title>
				 		</Body>
					</Header>
				</View>

				<View style={{ paddingBottom:40, paddingTop:25, alignItems:'center' }}>
					<View style={{ width:140, position:'relative' }}>
						<Image style={ styles.image } source={require('../img/profile.jpg')} />
						<Button
							onPress={() => {
										this.props.navigator.resetTo({
											id: 'EditProfile'
										});
									}}
							style={{ alignSelf:'flex-end', alignItems:'center', justifyContent:'center', width:45, height:45, position:'absolute', backgroundColor:'white',borderRadius:25}}>
							<MaterialCommunityIcons name='pencil' style={{ fontSize:16, color:'#50D688' }} />
						</Button>
					</View>
					<Text style={{ paddingTop:32, color:'#4A4A4A', fontSize:15, fontWeight:'500', fontFamily: 'Georgia' }}>Halil İbrahim Nuroğlu</Text>
				</View>

				<Grid>
					<Col>
						<Col style={{ paddingLeft: 59 }}>
							<Text style={{ color:'#50D688', fontSize:55 }}>225</Text>
							<Text style={{ color:'#9B9B9B', fontSize:11, fontWeight:'600', paddingBottom:38 }}>SÖZ EKLEDİNİZ</Text>
						</Col>
						<Col style={{ paddingLeft: 59 }}>
							<Text style={{ color:'#50D688', fontSize:55 }}>13</Text>
							<Text style={{ color:'#9B9B9B', fontSize:11, fontWeight:'600' }}>SÖZ KAYDETTİNİZ</Text>
						</Col>
					</Col>
					<Col style={{ borderLeftWidth:1, borderLeftColor:'rgba(51, 51, 51, 0.2)' }}>
						<Col style={{ paddingLeft: 41 }}>
							<Text style={{ color:'#50D688', fontSize:55 }}>45</Text>
							<Text style={{ color:'#9B9B9B', fontSize:11, fontWeight:'600', paddingBottom:38 }}>KİTAP OKUDUNUZ</Text>
						</Col>
						<Col style={{ paddingLeft: 41 }}>
							<Text style={{ color:'#50D688', fontSize:55 }}>3</Text>
							<Text style={{ color:'#9B9B9B', fontSize:11, fontWeight:'600' }}>KİŞİ TAKİP EDİYOR</Text>
						</Col>
					</Col>
				</Grid>

				<Tabbar navigator={this.props.navigator} />

			</View>
		);
	}
}

const styles = StyleSheet.create({
	image:{
		width: 132,
		height: 132,
		borderRadius: 66,
		borderWidth:10
	}
});
