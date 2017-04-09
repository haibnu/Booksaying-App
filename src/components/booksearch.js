import React, { Component } from 'react';
import {
	ListView,
	StatusBar,
	View,

} from 'react-native'

import {
	Container,
	Header, Left, Body,
	Item,
	Input,
	Icon,
	Card, CardItem,
	Button,
	Text,
	Content, ListItem,
	Grid, Row, Col
} from 'native-base'

import {css} from '../styles/css';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class BookSearch extends Component {
	 constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([
				{
					bookName: 'Yaratıcılık : Kuraları Boşverin',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Yüzüklerin Efendisi',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Silmarillion',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Hobbit',
					bookAuthor: 'Jack Foster',
				},
					 {
					bookName: 'Yaratıcılık : Kuraları Boşverin',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Yüzüklerin Efendisi',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Silmarillion',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Hobbit',
					bookAuthor: 'Jack Foster',
				},
					 {
					bookName: 'Yaratıcılık : Kuraları Boşverin',
					bookAuthor: 'Jack Foster Foster Foster',
				},
				{
					bookName: 'Yüzüklerin Efendisi',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Silmarillion',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Hobbit',
					bookAuthor: 'Jack Foster',
				},
					 {
					bookName: 'Yaratıcılık : Kuraları Boşverin',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Yüzüklerin Efendisi',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Silmarillion',
					bookAuthor: 'Jack Foster',
				},
				{
					bookName: 'Hobbit',
					bookAuthor: 'Jack Foster',
				},
			])
		};
	}
	 render() {
			return (
				<View style={css.containerWrap}>
					 <Header searchBar rounded style={{ backgroundColor:'#fff', borderBottomColor:'transparent', shadowOffset:{ width:0, height:3 }, shadowColor:'black', shadowOpacity:.08, shadowRadius:5 }}>
						<StatusBar backgroundColor='#50D688'/>
						<Button
							transparent
							style={{ paddingLeft:0, paddingRight:10 }}
							onPress={() => {
								this.props.navigator.pop();
							}}>
							<Icon name='arrow-back' style={{color: '#50D688'}} />
						</Button>
						<Item style={{ backgroundColor: '#F1F1F1', height: 31 }}>
							<MaterialIcon name="search" style={{ color: '#4A4A4A', fontSize:20, marginLeft:8, marginTop:2, marginRight: 5 }} />
							<Input
								placeholder="Kitap Ara"
								placeholderTextColor='rgba(51,51,51,0.4)'
								style={{ fontSize:13, marginTop:-1 }} />
						</Item>
					 </Header>
					 <Content>
							<ListView
								dataSource={this.state.dataSource}
								renderRow={(data) => (
									<ListItem
										style={{ borderBottomColor:'#D8D8D8' }}
										button
										onPress={() => {
											this.props.navigator.push({
												id: 'Add'
											});
										}}>
										<Row size={55}>
												<Text style={{ color: '#50D688', fontSize:15, lineHeight:18, fontWeight:'500' }}>{data.bookName}</Text>
										</Row>
										<Row size={45}>
										 	<Text style={{ color: '#9B9B9B', fontSize:13, lineHeight:15 }}>{data.bookAuthor}</Text>
										</Row>
									</ListItem>
								)}>
							</ListView>
					 </Content>
				</View>
			);
	 }
}
