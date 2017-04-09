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
	StyleSheet
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
				<Header noShadow style={{ backgroundColor:'white', alignItems:'stretch', borderBottomColor:'transparent', paddingLeft:0 }}>
					<StatusBar backgroundColor='#BFBFBF'/>
					<Left>
						<TouchableOpacity style={{ backgroundColor:'transparent' }}
							onPress={() => {
								this.props.navigator.pop();
							}}>
							<Icon name='keyboard-arrow-left' style={{fontSize:32, color: '#50D688'}} />
						</TouchableOpacity>
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
							<Icon name="done" style={{fontSize:24, color: '#50D688'}}/>
						</TouchableOpacity>
					</Right>
				</Header>

				<Grid>
					<Row style={{ flex:1, alignItems:'stretch' }}>
						<TextInput
							multiline={true}
							style={{ marginHorizontal:24, marginVertical: 14, alignItems:'center' ,borderBottomColor:'white', fontSize:18, fontWeight:'300', flex:1, textAlignVertical:'top' }}
							placeholder="O güzel sözü bizimle de paylaş (:"
							placeholderTextColor='rgba(51,51,51,0.4)'
							underlineColorAndroid='transparent'>
						</TextInput>
					</Row>
					<Row style={{ height: 170, alignItems:'stretch' }}>
						<Col>
							<Row style={{ height:56, alignItems:'center',flexDirection:'row', borderTopColor:'rgba(51,51,51,0.4)', borderTopWidth:1, borderBottomColor:'rgba(51,51,51,0.4)', borderBottomWidth:1 }}>
								<Icon name="book" style={{ paddingRight:8 ,fontSize:20,paddingLeft:20, color:'rgba(51,51,51,0.4)' }}/>
								<Text style={{ fontSize:15, fontWeight:'500', color:'rgba(51,51,51,0.4)' }}>Kitap Seç</Text>
								<TouchableWithoutFeedback
										onPress={() => {
											this.props.navigator.push({
												id: 'BookSearch'
											});
										}}>
									<Icon name="keyboard-arrow-right" style={{ fontSize:20 }} />
								</TouchableWithoutFeedback>
							</Row>
							<Row style={{alignItems:'center',height:56, flexDirection:'row', borderBottomColor:'rgba(51,51,51,0.4)', borderBottomWidth:1}}>
								<Icon name="mode-edit" style={{ paddingRight:8 ,fontSize:20,paddingLeft:20, color:'rgba(51,51,51,0.4)' }}/>
								<Text style={{ fontSize:15, fontWeight:'500', color:'rgba(51,51,51,0.4)' }}>Yazar Seç</Text>
							</Row>
							<Row style={{alignItems:'center',height:56, flexDirection:'row'}}>
								<Icon name="bookmark" style={{ paddingRight:8 ,fontSize:20,paddingLeft:20, color:'rgba(51,51,51,0.4)' }}/>
								<Text style={{ fontSize:15, fontWeight:'500', color:'rgba(51,51,51,0.4)' }}>Sayfa Numarası</Text>
							</Row>
						</Col>
					</Row>
				</Grid>

			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
  },
  welcome: {
	fontSize: 20,
	textAlign: 'center',
	margin: 10,
  },
  instructions: {
	textAlign: 'center',
	color: '#333333',
	marginBottom: 5,
  },
});
