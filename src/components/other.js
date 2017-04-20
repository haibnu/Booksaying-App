import React, { Component } from 'react';

import {
	View,
	StatusBar,
	Text,
	StyleSheet
} from 'react-native';

import {
	Header, Body, Title,
	Content,
	Row
} from 'native-base';

import {css} from '../styles/css';

import Tabbar from './tabbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Other extends Component{
	render(){
		return(
			<View style={css.containerWrap}>

				<View>
					<Header noShadow style={{ backgroundColor:'white', borderBottomColor:'transparent' }}>
						<StatusBar backgroundColor='#BFBFBF' />
						<Body>
							<Title style={{ fontSize:12, fontWeight:'bold', color:'#4A4A4A' }}>DİĞER</Title>
						</Body>
					</Header>
				</View>

				<Content style={{ paddingTop: 9, paddingLeft: 16 }}>
					<Row style={{ height:48, alignItems:'center', borderBottomWidth:1, borderBottomColor:'#D8D8D8' }}>
						<Icon name="info" style={{ fontSize:24, color:'#50D688', paddingRight:8 }}/>
						<Text style={{ color:'#4A4A4A', fontSize:15, fontWeight:'500' }}>Uygulama Hakkında</Text>
					</Row>
					<Row style={{ height:48, alignItems:'center', paddingRight:8, borderBottomWidth:1, borderBottomColor:'#D8D8D8' }}>
						<Icon name="stars" style={{ fontSize:24, color:'#50D688', paddingRight:8 }}/>
						<Text style={{ color:'#4A4A4A', fontSize:15, fontWeight:'500' }}>Bize Oy Verin</Text>
					</Row>
					<Row style={{ height:48, alignItems:'center', paddingRight:8, borderBottomWidth:1, borderBottomColor:'#D8D8D8' }}>
						<Icon name="exit-to-app" style={{ fontSize:24, color:'#9B9B9B', paddingRight:8 }}/>
						<Text style={{ color:'#4A4A4A', fontSize:15, fontWeight:'500' }}>Çıkış Yap</Text>
					</Row>
				</Content>

				<Tabbar textFeed={ css.footerTabText } nameFeed='bookmark-border' styleFeed={css.footerTabIcon}
						textDiscovery={ css.footerTabText } nameDiscovery='cards-outline' styleDiscovery={styles.other}
						textAdd={ css.footerTabText } nameAdd='add-circle-outline' styleAdd={styles.other}
						textProfile={ css.footerTabText } nameProfile='perm-identity' styleProfile={styles.other}
						textOther={ css.footerTabTextClick } nameOther='dehaze' styleOther={styles.styleFeed}
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
