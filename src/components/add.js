import React, { Component } from 'react';

import {
	View,
	Text,
	StatusBar,
	TouchableHighlight,
	TextInput,
	UselessTextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	StyleSheet,
	Platform
} from 'react-native';

import {
	Header,
	Left,
	Body,
	Right,
	Button,
	Title,
	Icon,
	Grid,Row,Col,
	Input, InputGroup,
} from 'native-base';

import {css} from '../styles/css';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Tabbar from './tabbar'

export default class Add extends Component{
	render(){
		return(
			<View style={css.containerWrap}>
				<Header noShadow style={{ paddingLeft:(Platform.OS === 'android') ? 0 : 16, backgroundColor:'white', alignItems:'stretch', borderBottomColor:'transparent', paddingLeft:0 }}>
					<StatusBar backgroundColor='#BFBFBF'/>
					<Left>
						<Button
							transparent
							onPress={() => {
								this.props.navigator.pop();
							}}>
							<Icon name='arrow-back' style={{color: '#50D688', fontSize:24}} />
						</Button>
					</Left>
					<Body>
						<Title style={{ fontSize:12, fontWeight:'bold', color:'#4A4A4A' }}>EKLE</Title>
					</Body>
					<Right>
						<TouchableOpacity
							onPress={() => {
								this.props.navigator.push({
									id: 'Discovery'
								});
							}}>
							<MaterialIcon name="done" style={{fontSize:24, color: '#50D688'}}/>
						</TouchableOpacity>
					</Right>
				</Header>

				<Grid>

					<Row style={{ flex:1, alignItems:'stretch' }}>
						<TextInput
							multiline={true}
							style={{ marginHorizontal:16, marginTop: 0, marginBottom:8, alignItems:'center' ,borderBottomColor:'white', fontSize:18, fontWeight:'300', flex:1, textAlignVertical:'top' }}
							placeholder="Yine beni hangi güzel söz ile kandıracasın köftehor?"
							placeholderTextColor='rgba(51,51,51,0.4)'
							underlineColorAndroid='transparent'>
						</TextInput>
					</Row>

					<View style={{ height: 224 }}>

						<Row style={{ height:56, paddingRight:8, paddingLeft:16, alignItems:'center', flexDirection:'row', borderTopColor:'#d7d7d7', borderTopWidth:1 }}>
							<Col size={60}>
								<Row style={{ alignItems:'center' }}>
									<MaterialIcon name="format-quote" style={{ paddingRight:8, fontSize:20, color:'rgba(51,51,51,0.4)' }}/>
									<Text style={{ fontSize:13, fontWeight:'500', color:'#4A4A4A' }}>Bu söz kitap dışı mı?</Text>
								</Row>
							</Col>
							<Col size={40}>
								<Row style={{ alignItems:'center', height: 38 }}>
									<Button transparent style={{ padding: 0, margin: 0, borderRadius:0, borderTopLeftRadius:19, borderBottomLeftRadius:19, height:38, borderWidth:1, borderColor:'#50D688'}}>
										<Text style={{ width: 60, textAlign: 'center', backgroundColor: 'transparent' }}>Evet</Text>
									</Button>
									<Button transparent style={{ padding: 0, margin: 0, borderRadius:0, borderTopRightRadius:19, borderBottomRightRadius:19, height:38, borderWidth:1, marginLeft:-1, borderColor:'#50D688', backgroundColor: '#50D688'}}>
										<Text style={{ width: 60, textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>Hayır</Text>
									</Button>
								</Row>
							</Col>
						</Row>

						<Row style={{height:56, paddingRight:8, flexDirection:'row', borderTopColor:'#d7d7d7', borderTopWidth:1}}>
							<Button block transparent style={{ padding: 0, flex:1, height:54, justifyContent: 'flex-start' }} onPress={() => {
								this.props.navigator.push({
									id: 'BookSearch'
								});
							}}>
								<Col size={60}>
									<Row style={{ alignItems:'center' }}>
										<MaterialIcon name="book" style={{ paddingRight:8, fontSize:20, color:'rgba(51,51,51,0.4)' }}/>
										<Text style={{ fontSize:13, fontWeight:'500', color:'#4A4A4A' }}>Kitap Seç</Text>
									</Row>
								</Col>
								<Col size={40}>
									<Text style={{ fontSize:13, fontWeight:'500', color:'#50D688' }} numberOfLines={1}>Fikir Nasıl Bulunur?</Text>
								</Col>
							</Button>
						</Row>

						<Row style={{height:56, paddingRight:8, flexDirection:'row', borderTopColor:'#d7d7d7', borderTopWidth:1}}>
							<Button block transparent style={{ padding: 0, flex:1, height:54, justifyContent: 'flex-start' }} onPress={() => {
								this.props.navigator.push({
									id: 'BookSearch'
								});
							}}>
								<Col size={60}>
									<Row style={{ alignItems:'center' }}>
										<MaterialIcon name="mode-edit" style={{ paddingRight:8, fontSize:20, color:'rgba(51,51,51,0.4)' }}/>
										<Text style={{ fontSize:13, fontWeight:'500', color:'#4A4A4A' }}>Yazar Seç</Text>
									</Row>
								</Col>
								<Col size={40}>
									<Text style={{ fontSize:13, fontWeight:'500', color:'#50D688' }}>Jack Foster</Text>
								</Col>
							</Button>
						</Row>

						<Row style={{ height:56, paddingRight:8, paddingLeft:16, alignItems:'center', flexDirection:'row', borderTopColor:'#d7d7d7', borderTopWidth:1 }}>
							<Col size={60}>
								<Row style={{ alignItems:'center' }}>
									<MaterialIcon name="bookmark" style={{ paddingRight:8, fontSize:20, color:'rgba(51,51,51,0.4)' }}/>
									<Text style={{ fontSize:13, fontWeight:'500', color:'#4A4A4A' }}>Sayfa Numarası</Text>
								</Row>
							</Col>
							<Col size={40}>
								<View style={{ position:'relative' }}>
									<Button transparent style={{ position:'absolute', top: 1, left: 2, padding: 0, margin: 0, borderRadius:0, height:36}}>
										<Icon name="add-circle" style={{ fontSize: 36, color: '#50D688' }} />
									</Button>
									<Button transparent style={{ position:'absolute', top: 1, right: 2, padding: 0, margin: 0, borderRadius:0, height:36}}>
										<Icon name="remove-circle" style={{ fontSize: 36, color: '#50D688' }} />
									</Button>
									<Input
										placeholder="0"
										placeholderTextColor='rgba(51,51,51,0.4)'
										underlineColorAndroid='transparent'
										style={{ fontSize: 14, textAlign: 'center', borderWidth:1, borderColor:'#50D688', height: 38, borderRadius: 19, justifyContent: 'center' }}/>
								</View>
							</Col>
						</Row>
					</View>
				</Grid>

				<Tabbar navigator={ this.props.navigator } />

			</View>
		);
	}
}
