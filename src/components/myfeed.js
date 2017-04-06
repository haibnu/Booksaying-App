import React, { Component } from 'react';

import {
	TouchableHighlight,
	Text,
	View,
	StatusBar,
	ListView,
	Image,
	Platform
} from 'react-native';

import {
	Content,
	Button,
	Body,
	Thumbnail,
	Left,
	Header,
	Title,
	Card, CardItem
} from 'native-base';

import {css} from '../styles/css';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tabbar from './tabbar'

export default class MyFeed extends Component{
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([
				{
					bookName: 'Yaratıcılık : Kuraları Boşverin',
					author: 'John Hegarty',
					page: 53,
					quote: 'Ani değerlendirmeler ve hızlı kararlar çoğunlukla başarısız işler yaratır.'
				},
				{
					bookName: 'Yaratıcılık : Kuraları Boşverin',
					author: 'John Hegarty',
					page: 53,
					quote: 'Ani değerlendirmeler ve hızlı kararlar çoğunlukla başarısız işler yaratır.'
				},
				{
					bookName: 'Yaratıcılık : Kuraları Boşverin',
					author: 'John Hegarty',
					page: 53,
					quote: 'Ani değerlendirmeler ve hızlı kararlar çoğunlukla başarısız işler yaratır.'
				},
				{
					bookName: 'Yaratıcılık : Kuraları Boşverin',
					author: 'John Hegarty',
					page: 53,
					quote: 'Ani değerlendirmeler ve hızlı kararlar çoğunlukla başarısız işler yaratır.'
				},
			])
		};
	}
	render(){
		return(
			<View style={css.containerWrap}>
				<View>
					<Header style={{ backgroundColor:'white' }}>
						<StatusBar
							backgroundColor='#BFBFBF'
						/>
						<Body>
							<Title style={{ fontSize:12, fontWeight:'bold', color:'#4A4A4A' }}>SÖZLERİM</Title>
						</Body>
					</Header>
				</View>
				<Content style={{ paddingVertical: 9, paddingHorizontal: 20 }}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={(data) => (
							<Card style={{ marginBottom: 16 }}>
								<CardItem>
									<Left>
										<Thumbnail square source={require('../img/profile.jpg')} style={{ width:46, height:67 }}/>
										<Body>
											<Text style={{ fontSize:14, color:'#4A4A4A' }}>{data.bookName}</Text>
											<Text note style={{ paddingVertical:6 , fontSize:11, color:'#4A4A4A' }}>{data.author}</Text>
											<Text note style={{ fontSize:11, color:'#4A4A4A' }}>{data.page}.Sayfa</Text>
										</Body>
									</Left>
									<TouchableHighlight>
										<MaterialCommunityIcons name="dots-vertical" style={{ marginBottom:50, fontSize:18 }}/>
									</TouchableHighlight>
								</CardItem>
								<CardItem content>
									  <Text>{ data.quote }</Text>
								</CardItem>
							</Card>
						)}
					/>
				</Content>
				<Tabbar navigator={ this.props.navigator } />
			</View>
		);
	}
}
