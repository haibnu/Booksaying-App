import React, { Component } from 'react';

import {
	View,
	Text,
	StatusBar,
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback,
	TextInput,
	UselessTextInput,
	StyleSheet,
	Platform
} from 'react-native';

import {
	Header, Left, Body, Right,
	Button, Title, Icon,
	Grid, Row, Col,
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
					<Left></Left>
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

						<Row style={ styles.propertiesRow }>
							<Col>
								<Row style={{ alignItems:'center' }}>
									<MaterialIcon name="format-quote" style={{ paddingRight:8, fontSize:20, color:'#50D688' }}/>
									<Text style={{ fontSize:13, fontWeight:'500', color:'#4A4A4A' }}>Bu söz kitap dışı mı?</Text>
								</Row>
							</Col>
							<Col style={{ padding:0 ,width: 140 }}>
								<Row style={{ height: 38 }}>
									<TouchableHighlight transparent style={{ justifyContent:'center', padding: 0, margin: 0, borderRadius:0, borderTopLeftRadius:19, borderBottomLeftRadius:19, height:38, borderWidth:1, borderColor:'#50D688'}}>
										<Text style={{ color:'#50D688' ,width: 60, textAlign: 'center', backgroundColor: 'transparent', fontWeight:'500', fontSize:14 }}>Evet</Text>
									</TouchableHighlight>
									<TouchableHighlight transparent style={{ justifyContent:'center', padding: 0, margin: 0, borderRadius:0, borderTopRightRadius:19, borderBottomRightRadius:19, height:38, borderWidth:1, marginLeft:-1, borderColor:'#50D688', backgroundColor: '#50D688'}}>
										<Text style={{ width: 60, textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>Hayır</Text>
									</TouchableHighlight>
								</Row>
							</Col>
						</Row>

						<Row style={ styles.propertiesRow }>
							<Button block transparent style={{ paddingLeft: 0, flex:1, height:54, justifyContent: 'flex-start' }} onPress={() => {
								this.props.navigator.push({
									id: 'BookSearch'
								});
							}}>
								<Col>
									<Row style={{ alignItems:'center' }}>
										<MaterialIcon name="book" style={{ paddingRight:8, fontSize:20, color:'#50D688' }}/>
										<Text style={{ fontSize:13, fontWeight:'500', color:'#4A4A4A' }}>Kitap Seç</Text>
									</Row>
								</Col>
								<Col style={{ width: 140 }}>
									<Text style={{ fontSize:13, fontWeight:'500', color:'#50D688' }} numberOfLines={1}>Fikir Nasıl Bulunur?</Text>
								</Col>
							</Button>
						</Row>

						<Row style={ styles.propertiesRow }>
							<Button block transparent style={{ paddingLeft: 0, margin:0, flex:1, height:54, justifyContent: 'flex-start' }} onPress={() => {
								this.props.navigator.push({
									id: 'BookSearch'
								});
							}}>
								<Col>
									<Row style={{ alignItems:'center' }}>
										<MaterialIcon name="mode-edit" style={{ paddingRight:8, fontSize:20, color:'#50D688' }}/>
										<Text style={{ fontSize:13, fontWeight:'500', color:'#4A4A4A' }}>Yazar Seç</Text>
									</Row>
								</Col>
								<Col style={{ width: 140 }}>
									<Text style={{ fontSize:13, fontWeight:'500', color:'#50D688' }}>Jack Foster</Text>
								</Col>
							</Button>
						</Row>

						<Row style={ styles.propertiesRow }>
							<Col>
								<Row style={{ alignItems:'center' }}>
									<MaterialIcon name="bookmark" style={{ paddingRight:8, fontSize:20, color:'#50D688' }}/>
									<Text style={{ fontSize:13, fontWeight:'500', color:'#4A4A4A' }}>Sayfa Numarası</Text>
								</Row>
							</Col>
							<Col style={{ width: 140}}>
								<Row style={{ padding:0, alignItems:'center', width:140 }}>
									<Col style={{ width: 40 }}>
										<TouchableHighlight transparent style={{ padding: 0, margin: 0, borderRadius:0, height:36}}>
											<Icon name="remove-circle" style={{ fontSize: 36, color: '#50D688' }} />
										</TouchableHighlight>
									</Col>
									<Col>
										<TextInput
											underlineColorAndroid="white"
											placeholder="0"
											keyboardType="numeric"
											placeholderTextColor='rgba(51,51,51,0.4)'
											style={{ flex:1, fontSize: 18, textAlign: 'center', borderBottomWidth:1, borderBottomColor:'#50D688', height: 38, justifyContent: 'center' }}
											onChangeText={(text) => this.setState({text})}
										/>
									</Col>
									<Col style={{ width: 40 }}>
										<TouchableHighlight transparent style={{ padding: 0, margin: 0, borderRadius:0, height:36}}>
											<Icon name="add-circle" style={{ fontSize: 36, color: '#50D688' }} />
										</TouchableHighlight>
									</Col>
								</Row>
							</Col>
						</Row>
					</View>
				</Grid>

				<Tabbar
					textFeed={ css.footerTabText }
					nameFeed='bookmark-border'
					styleFeed={css.footerTabIcon}
					textDiscovery={ css.footerTabText }
					nameDiscovery='cards-outline'
					styleDiscovery={styles.other}
					textAdd={ css.footerTabTextClick }
					nameAdd='add-circle'
					styleAdd={styles.styleFeed}
					textProfile={ css.footerTabText }
					nameProfile='perm-identity'
					styleProfile={styles.other}
					textOther={ css.footerTabText }
					nameOther='dehaze'
					styleOther={styles.other}
					navigator={this.props.navigator}/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	styleFeed:{
		fontSize:26,
		color:'#50D688'
	},
	other:{
		fontSize:26,
		color:'#9B9B9B'
	},
	propertiesRow: {
		height:56,
		paddingRight:8,
		alignItems:'center',
		flexDirection:'row',
		borderTopColor:'#d7d7d7',
		borderTopWidth:1,
		paddingLeft: 16,
		flex:1
	},
	propertiesValue: {
		width: 140
	}

})
