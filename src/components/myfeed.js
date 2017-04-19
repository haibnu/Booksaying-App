import React, { Component } from 'react';

import {
	TouchableHighlight,
	Text,
	View,
	StatusBar,
	ListView,
	Image,
	Platform,
	RefreshControl,
	StyleSheet,
	ActivityIndicator
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

export default class MyFeed extends Component{

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
				<Content>
					<ListView
						style={{ flex:1 }}
						enableEmptySections={ true }
						dataSource={ this.state.dataSource }
						renderRow={ row => this._renderRow(row) }
						refreshControl={
							<RefreshControl
								refreshing={ false }
								onRefresh={ () => this._onRefresh() }
							/>
						}
						onEndReached={ () => this._onEndReached() }
						onEndReachedThreshold={1}
					/>
				</Content>
				<Tabbar navigator={ this.props.navigator } />
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
