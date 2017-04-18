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
} from 'native-base';

import {css} from '../styles/css';

import Tabbar from './tabbar'
import Card from './card'

export default class MyFeed extends Component{
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([
				{
					bookName: 'asdfasdfsad',
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
					<Header noShadow style={{ backgroundColor:'white', borderBottomColor:'transparent' }}>
						<StatusBar backgroundColor='#BFBFBF' />
						<Body>
							<Title style={{ fontSize:12, fontWeight:'bold', color:'#4A4A4A' }}>SÖZLERİM</Title>
						</Body>
					</Header>
				</View>
				<Content style={{ paddingVertical: 9, paddingHorizontal: 20 }}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={(data) => (
							<Card primaryText={ data.bookName } secondaryText={data.author} sayingSummary= { data.quote}></Card>
						)}
					/>
				</Content>
				<Tabbar navigator={ this.props.navigator } />
			</View>
		);
	}
}
