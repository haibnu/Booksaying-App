import React, {Component} from 'react';
import {
	TouchableHighlight,
	Text,
	View,
	StatusBar,
	Image,
	StyleSheet,
	ListView,
	RefreshControl,
	ActivityIndicator,
	TouchableWithoutFeedback
} from 'react-native';

import {
	Container, Content,
	Header, Left, Right, Body, Title,
	Button,
	Form, Input, Label,
	Col, Row, Grid,
	Footer, FooterTab,
	Thumbnail
} from 'native-base';

import {css} from '../styles/css';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tabbar from './tabbar'

import Card from './card'

const productArray = [];

const LoadingIndicator = ({ loading }) => (
	loading ? (
		<View style={ styles.loading }>
			<ActivityIndicator
			animating={ true }
			style={[ styles.loading ]}
			size="large"
			/>
		</View>
	) : null
)

export default class discovery extends Component{

	cardCount=1;
	currentPage = 1;
	isFetching = false;

	constructor(props) {
		super(props);
		const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.state = {
			dataSource: dataSource.cloneWithRows(productArray),
			isLoading: false
		}
	}

	loadData(param={refresh:false}){
		productArray.push({loading:true});
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(productArray),
			isLoading: true
		});

		this.getTheData(function(json){
			productArray.pop();
			(param.refresh) ? productArray = json :  productArray = productArray.concat(json)
			state = {
				dataSource: this.state.dataSource.cloneWithRows(productArray),
				isLoading: false
			}
			this.setState(state);

		}.bind(this));
	}

	componentDidMount(){
		this.loadData();
	}

	getTheData(callback){
		if (this.state.isLoading) { return }
		fetch("http://booksaying.com/api/ali/saying/?page="+this.currentPage)
		.then(response => response.json())
		.then(json => callback(json))
		.catch(error => console.log(error));
	}

	_onRefresh() {
		this.loadData({refresh:true});
	}

	_onEndReached() {
		if (this.state.isLoading === false) {
			this.currentPage = this.currentPage + 1;
			this.loadData();
		}
	}

	_renderRow(row) {
		if (row.loading === true) {
			console.log('adas');
				return <LoadingIndicator loading={ true } />
			} else {
			return (
				<View style={{ marginTop:16, marginLeft:20, marginRight:20 }}>
							<Card navigator={this.props.navigator} onPress primaryText="Hakan Şahin" secondaryText="55 Kitaptan 176 Sözü Var" sayingSummary={row.saying} style={{ marginTop:16, marginLeft: 20, marginRight: 20  }}>
							</Card>
				</View>
			)
			this.cardCount = this.cardCount + 1;
		}
	}

	_renderSectionHeader(header) {
		return (
			<View style={{ flex:1 }}>
				<View style={{ height:190, marginTop: -1, backgroundColor:'#50D688' }}>

				</View>
				<Text style={{ fontSize:11, color:'#9B9B9B', fontWeight:'600', paddingVertical:24, paddingHorizontal:20, paddingBottom:0 }}>
					BU SÖZLERİ DE BEĞENEBİLİRSİN
				</Text>
			</View>
		)
	}

	render(){
		return(
			<View style={css.containerWrap}>
				<View>
					<Header noShadow style={{ backgroundColor:'#50D688', borderBottomColor:'transparent' }}>
						<StatusBar backgroundColor='#50D688' />
						<Body>
							<Image style={{ alignSelf:'center', width:41, height:28, resizeMode:'contain' }} source={require('../img/logo-navbar@2x.png')} />
						</Body>
					</Header>
				</View>

				<ListView
					style={{ flex:1 }}
					enableEmptySections={ true }
					dataSource={ this.state.dataSource }
					renderSectionHeader={ header => this._renderSectionHeader(header) }
					renderRow={ row => this._renderRow(row) }
					refreshControl={
						<RefreshControl
							refreshing={ false }
							onRefresh={ () => this._onRefresh() }
						/>
					}
					onEndReached={ () => this._onEndReached() }
					onEndReachedThreshold={10}
				/>

				<Tabbar textFeed={ css.footerTabText } nameFeed='bookmark-border' styleFeed={css.footerTabIcon}
						textDiscovery={ css.footerTabTextClick } nameDiscovery='cards' styleDiscovery={styles.styleFeed}
						textAdd={ css.footerTabText } nameAdd='add-circle-outline' styleAdd={styles.other}
						textProfile={ css.footerTabText } nameProfile='perm-identity' styleProfile={styles.other}
						textOther={ css.footerTabText } nameOther='dehaze' styleOther={styles.other}
						navigator={this.props.navigator} />

			</View>
		);

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#F5FCFF'
	},
	styleFeed:{
		fontSize:26,
		color:'#50D688'
	},
	other:{
		fontSize:26,
		color:'#9B9B9B'
	},
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10
	},
	row: {
		paddingHorizontal: 10,
		paddingVertical: 15
	}
})
