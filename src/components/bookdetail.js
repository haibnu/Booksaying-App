import React, { Component } from 'react';

import {
	View,
	StatusBar,
	ListView,
	TouchableHighlight,
	Text,
	Image
} from 'react-native';

import {
	Header, Left, Right, Body,
	Button,
	Card, CardItem,
	Thumbnail,
	Content,
} from 'native-base';

import {css} from '../styles/css';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tabbar from './tabbar'

const { BlurView, VibrancyView } = require('react-native-blur');

export default class BookDetail extends Component{

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([
				{
					name: 'Hakan Şahin',
					bookCount: 5,
					quoteCount: 176,
					quote: 'Başarısızlığa uğradığınız ana kadar,başarıp başaramadığınızı bilemezsiniz.'
				},
				{
					name: 'Hakan Şahin',
					bookCount: 5,
					quoteCount: 176,
					quote: 'Başarısızlığa uğradığınız ana kadar,başarıp başaramadığınızı bilemezsiniz.'
				},
				{
					name: 'Hakan Şahin',
					bookCount: 5,
					quoteCount: 176,
					quote: 'Başarısızlığa uğradığınız ana kadar,başarıp başaramadığınızı bilemezsiniz.'
				},
				{
					name: 'Hakan Şahin',
					bookCount: 5,
					quoteCount: 176,
					quote: 'Başarısızlığa uğradığınız ana kadar,başarıp başaramadığınızı bilemezsiniz.'
				},
				{
					name: 'Hakan Şahin',
					bookCount: 5,
					quoteCount: 176,
					quote: 'Başarısızlığa uğradığınız ana kadar,başarıp başaramadığınızı bilemezsiniz.'
				}
			])
		};
	}

	render(){
		return(
			<View style={ css.containerWrap }>
				<Content>
					<Image blurRadius={1} source={require('../img/kus.jpg')} resizeMode={Image.resizeMode.center} style={{flex: 1, height:null, width:null, resizeMode: 'cover'}}>
						<BlurView blurType="light" blurAmount={10} viewRef={1}>
							<Header noShadow style={{ backgroundColor:'transparent' }}>
								<StatusBar
									translucent
									backgroundColor='transparent'
								/>
								<Left>
									<Button
										transparent
										onPress={() => {
											this.props.navigator.pop();
										}}>
										<Icon name='arrow-back' style={{ color: '#FFFFFF', fontSize:24 }} />
									</Button>
								</Left>
								<Body></Body>
								<Right></Right>
							</Header>
							<View style={{ height:280, marginTop: -1, alignItems:'center', paddingTop:14 }}>
								<Image blurRadius={1} style={{ height:160, width:110, backgroundColor:'red' }} source={require('../img/kus.jpg')} />
								<Text style={{ color:'#FFFFFF', fontSize:17, fontWeight:'600', paddingTop:29, paddingBottom:8 }}>Ve Sen Kuş Olur Gidersin</Text>
								<Text style={{ color:'rgba(255,255,255,0.6)', fontSize:13, fontWeight:'600' }}>Tarık Tufan</Text>
							</View>
						</BlurView>
					</Image>
					<View style={{ paddingVertical: 24, paddingHorizontal: 20 }}>
						<ListView
							dataSource={this.state.dataSource}
							renderRow={(data) => (
								<Card>
									<CardItem>
										<Left>
											<Thumbnail source={require('../img/profile.jpg')} style={{ width:46, height:46 }}/>
											<Body>
												<Text style={{ fontSize:14, color:'#4A4A4A' }}>{data.name}</Text>
												<Text note style={{ marginTop:6, fontSize:11, color:'#4A4A4A' }}>{data.bookCount} Kitaptan {data.quoteCount} Sözü var</Text>
											</Body>
										</Left>
										<TouchableHighlight>
											<MaterialCommunityIcons name="bookmark-plus-outline" style={{ fontSize:18 }}/>
										</TouchableHighlight>
										<TouchableHighlight>
											<MaterialCommunityIcons name="dots-vertical" style={{ fontSize:18 }}/>
										</TouchableHighlight>
									</CardItem>
									<CardItem content>
										  <Text>{ data.quote }</Text>
									</CardItem>
								</Card>
							)}
						/>
					</View>
				</Content>
				<Tabbar navigator={this.props.navigator}/>
			</View>
		);
	}
}
