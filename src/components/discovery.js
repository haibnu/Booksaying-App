import React, {Component} from 'react';
import {
	TouchableHighlight,
	Text,
	View,
	StatusBar,
	Image,
	StyleSheet,
	ListView
} from 'react-native';

import {
	Container,
	Content,
	Button,
	Left,
	Right,
	Body,
	Header,
	Title,
	Form,
	Item,
	Input,
	Label,
	Col, Row, Grid,
	Footer,
	FooterTab,
	Card, CardItem,
	Thumbnail
} from 'native-base';

import {css} from '../styles/css';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tabbar from './tabbar'

const productArray = [];

export default class discovery extends Component{
	currentPage = 1;
	constructor(props) {
	    super(props);
	    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      	dataSource: dataSource.cloneWithRows(productArray),
			isLoading:true
	    };
	}
	loadData(){
		this.getTheData(function(json){

			productArray = productArray.concat(json);

			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(productArray),
				isLoading:false
			});
		}.bind(this));
	}

	componentDidMount(){
		this.loadData();
	}

	getTheData(callback){
		this.setState({
			isLoading:true
		});
		fetch("http://booksaying.com/api/ali/saying/?page="+this.currentPage)
		.then(response => response.json())
		.then(json => callback(json))
		.catch(error => console.log(error));
	}

	render(){
		return(
			<View style={css.containerWrap}>

				<View>
					<Header noShadow style={{ backgroundColor:'#50D688' }}>
						<StatusBar
							backgroundColor='#50D688'
						/>
						<Body>
							<Image style={{ alignSelf:'center', width:41, height:28, resizeMode:'contain' }} source={require('../img/logo-navbar@2x.png')} />
						</Body>
					</Header>
				</View>

				<View style={{ height:190, marginTop: -1, backgroundColor:'#50D688' }}>

				</View>

				<Content style={{ paddingVertical: 24, paddingHorizontal: 20 }}>

					<Text style={{ fontSize:11, color:'#9B9B9B', fontWeight:'600' }}>
						BU SÖZLERİ DE BEĞENEBİLİRSİN
					</Text>

					<TouchableHighlight onPress={() => {
												this.currentPage=this.currentPage+1;
												this.loadData();
										}}>
						<Text>Load More</Text>
					</TouchableHighlight>

					<ListView
			          	dataSource={this.state.dataSource}
			          	renderRow={(data) => (
							<Card noShadow style={{ marginTop:16 }}>
								<CardItem>
									<Left>
										<Thumbnail source={require('../img/profile.jpg')} style={{ width:46, height:46 }}/>
										<Body>
											<Text style={{ fontSize:14, color:'#4A4A4A' }}>Hakan Şahin</Text>
											<Text note style={{ marginTop:6, fontSize:11, color:'#4A4A4A' }}>55 Kitaptan 178 Sözü var</Text>
										</Body>
									</Left>
									<TouchableHighlight>
										<MaterialCommunityIcons name="bookmark-plus-outline" style={{ fontSize:18 }}/>
									</TouchableHighlight>
									<TouchableHighlight>
										<MaterialCommunityIcons name="dots-vertical" style={{ fontSize:18 }}/>
									</TouchableHighlight>
								</CardItem>
								<CardItem content>
		                              <Text>{ data.saying }</Text>
		                        </CardItem>
							</Card>
						)}
			        />

				</Content>

				<Tabbar navigator={this.props.navigator} />

			</View>
		);

	}
}
