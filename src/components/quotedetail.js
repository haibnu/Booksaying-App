import React, { Component } from 'react';

import {
	Text,
	View,
	Image,
	StatusBar,
	Platform,
	StyleSheet
} from 'react-native';

import {
	Header, Left, Body, Right,
	Button,
	Grid, Col, Row
} from 'native-base';

import {css} from '../styles/css';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tabbar from './tabbar'

export default class QuoteDetail extends Component{
	render(){
		return(
			<View style={ css.containerWrap }>
				<View style={{ flex:1 }}>
					<Header noShadow style={{ paddingLeft:(Platform.OS === 'android') ? 0 : 16, backgroundColor:'#50D688' }}>
						<StatusBar
							backgroundColor='#50D688'
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
						<Right>
							<Button
								transparent
								onPress={() => {
									this.props.navigator.pop();
								}}>
								<Icon name='share' style={{ color: '#FFFFFF', fontSize:24 }} />
							</Button>
						</Right>
					</Header>
					<View style={{ flex:1, alignItems:'center', paddingTop:14, backgroundColor:'#50D688', position:'relative' }}>
						<Text style={{ paddingBottom:59,color:'#FFFFFF', paddingTop:120, paddingHorizontal:40, fontSize:24 }}>Sürekli yaptığımız şey neyse, biz o'yuz. O halde, mükemmellik bir eylem değil, bir alışkanlıktır.</Text>
						<View style={{ height:92, width:169, alignItems:'center', justifyContent:'center' }}>
							<View style={{ width:164, flexDirection:'column', alignItems:'center', borderBottomWidth:1, borderBottomColor:'rgba(255,255,255,0.5)' }}>
								<Icon name="bookmark" style={{ color:'#FFFFFF', fontSize:28 }}/>
								<Text style={{ paddingTop:6, color:'#FFFFFF', fontSize:13, fontWeight:'500', paddingBottom:11 }}>Sözlerine Eklendi</Text>
							</View>
							<View style={{ flexDirection:'row', justifyContent:'center', paddingTop:8 }}>
								<View style={{ flexDirection:'row', justifyContent:'center' }}>
									<Icon name="delete" style={{ color:'#FFFFFF', fontSize:20 }}/>
									<Text style={{ paddingLeft:8, paddingTop:6, color:'#FFFFFF', fontSize:11, fontWeight:'500' }}>Sözü Sil</Text>
								</View>
								<View style={{ flexDirection:'row', paddingLeft:16}}>
									<Icon name="flag" style={{ color:'#FFFFFF', fontSize:20 }}/>
									<Text style={{ paddingLeft:8, paddingTop:6, color:'#FFFFFF', fontSize:11, fontWeight:'500' }}>Şikayet Et</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={{ height:100, flexDirection:'row' }}>
						<Image source={require('../img/sucveceza.jpg')} style={{ marginTop:-20, alignSelf:'flex-start', marginLeft:24 }}/>
						<View style={{ flexDirection:'column', paddingTop:15, paddingLeft:24 }}>
							<Text style={{ color:'#424242', fontSize:17, fontWeight:'600' }}>Suç ve Ceza</Text>
							<Text style={{ color:'#9B9B9B', fontSize:13, fontWeight:'600' }}>Dostoyevski</Text>
						</View>
					</View>
				</View>
				<Tabbar textFeed={ css.footerTabText } nameFeed='bookmark-border' styleFeed={css.footerTabIcon}
						textDiscovery={ css.footerTabText } nameDiscovery='cards-outline' styleDiscovery={styles.other}
						textAdd={ css.footerTabText } nameAdd='add-circle-outline' styleAdd={styles.other}
						textProfile={ css.footerTabText } nameProfile='perm-identity' styleProfile={styles.other}
						textOther={ css.footerTabText } nameOther='dehaze' styleOther={styles.other}
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
});
