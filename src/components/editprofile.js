import React, { Component } from 'react';

import {
	View,
	StatusBar,
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	Platform
} from 'react-native';

import {
	Button,
	Header, Left, Body, Right,
	Title,
	Container,
	Form,
	Item,
	Grid, Col, Row,
	Label,
	Input,
	Content
} from 'native-base';

import {css} from '../styles/css';

import Tabbar from './tabbar';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EditProfile extends Component{
	render(){
		return(
			<View style={ css.containerWrap }>
				<View style={{ backgroundColor:'white' }}>
					<Header noShadow style={{ paddingLeft:(Platform.OS === 'android') ? 0 : 16, backgroundColor:'white', alignItems:'stretch' }}>
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
							<Title style={{ fontSize:12, fontWeight:'bold', color:'#4A4A4A' }}>PROFİL DÜZENLE</Title>
						</Body>
						<Right></Right>
					</Header>
				</View>
				<Content>
					<Form>
						<Grid style={{ paddingHorizontal:40, paddingTop:12, paddingBottom:16}}>
							<Row style={{ marginBottom:25 }}>
								<Col style={{ flexDirection:'row', alignItems:'center' }}>
									<Text style={{ color:'#9B9B9B', fontSize:13 }}>booksaying.com /</Text>
									<Text style={{ color:'#379646', fontSize:16, fontWeight:'500' }}>@haibnu</Text>
								</Col>
							</Row>
							<Row>
								<Col style={{ justifyContent:'center', alignItems:'center' }}>
									<Image style={ styles.image } source={require('../img/profile.jpg')} />
									<TouchableHighlight style={{ width:20, height:18, position:'absolute', backgroundColor:'transparent',borderRadius:25}}>
										<Icon name='photo-camera' style={{ fontSize:16, color:'#50D688' }} />
									</TouchableHighlight>
								</Col>
								<Col>
									<Item labelStyle={{ marginTop:0 }} floatingLabel style={{borderWidth:.5, height: 41}}>
										<Label style={{ color:'#9B9B9B', fontSize:11, fontWeight:'500' }}>Ad</Label>
										<Input inputStyle={{ marginTop:0 }} style={{ height: 36, lineHeight: 20, marginTop: 0 }}/>
									</Item>
									<Item floatingLabel style={{borderWidth:.5, height: 41}}>
										<Label style={{ color:'#9B9B9B', fontSize:11, fontWeight:'500' }}>Soyad</Label>
										<Input style={{ height: 36, lineHeight: 20, marginTop: 0 }}/>
									</Item>
								</Col>
							</Row>
						</Grid>
						<View style={{ paddingHorizontal:40 }}>
							<Item floatingLabel style={{borderWidth:.5, marginTop: 16}}>
								<Label style={{ color:'rgba(51,51,51,0.4)', fontSize:15, fontWeight:'500' }}>Şifre</Label>
								<Input/>
							</Item>
							<Item floatingLabel style={{borderWidth:.5, marginTop: 8}}>
								<Label style={{ color:'rgba(51,51,51,0.4)', fontSize:15, fontWeight:'500' }}>Şifre Tekrar</Label>
								<Input/>
							</Item>
							<Item floatingLabel style={{borderWidth:.5, marginTop: 8}}>
								<Label style={{ color:'rgba(51,51,51,0.4)', fontSize:15, fontWeight:'500' }}>E-Posta</Label>
								<Input/>
							</Item>
							<Item floatingLabel style={{borderWidth:.5, marginTop: 8}}>
								<Label style={{ color:'rgba(51,51,51,0.4)', fontSize:15, fontWeight:'500' }}>Doğum Tarihi</Label>
								<Input/>
							</Item>
							<Item floatingLabel style={{borderWidth:.5, marginTop: 8}}>
								<Label style={{ color:'rgba(51,51,51,0.4)', fontSize:15, fontWeight:'500' }}>Yaşadığınız Şehir</Label>
								<Input style={{ width:295 }}/>
							</Item>
							<Button full iconLeft style={{ backgroundColor:'#50D688', borderRadius: 3, marginTop: 24, marginBottom:67 }}>
								<Text style={{ color:'white', fontWeight: '600', fontSize: 15, }}>Güncelle</Text>
						 	</Button>
						</View>
					</Form>
				</Content>
				<Tabbar navigator={this.props.navigator}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	image:{
		width: 120,
		height: 120,
		borderRadius: 66,
		borderWidth:10,
		opacity:0.5,
		justifyContent:'center'
	}
});
