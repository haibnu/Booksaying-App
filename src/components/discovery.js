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

export default class discovery extends Component{
	constructor(props) {
	    super(props);
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
			accessToken: this.props.accessToken,
	      	dataSource: ds.cloneWithRows([
	        	{
					name: 'Hakan Şahin',
					bookCount: 5,
					quoteCount: 176,
					quote: 'Başarısızlığa uğradığınız ana kadar,başarıp başaramadığınızı bilemezsiniz.'
				}
	      	])
	    };
	}
	render(){
		return(
			<View style={css.containerWrap}>
				<StatusBar
					backgroundColor="#50D688"
					barStyle="light-content"
				/>

				<View style={{ height:64,backgroundColor:'#50D688', borderBottomColor:'transparent' }}>
					<View style={{ flex:1, justifyContent:'center' }}>
						<Image style={{ alignSelf:'center', width:41, height:28, resizeMode:'contain' }} source={require('../img/logo-navbar@2x.png')} />
					</View>
				</View>

				<View style={{ height:190, backgroundColor:'#50D688' }}>

				</View>

				<Content style={{ paddingVertical: 24, paddingHorizontal: 40 }}>

					<Text style={{ fontSize:11, color:'#9B9B9B', fontWeight:'600' }}>
						BU SÖZLERİ DE BEĞENEBİLİRSİN
					</Text>
					<ListView
			          	dataSource={this.state.dataSource}
			          	renderRow={(data) => (
							<Card style={{ marginTop:16 }}>
								<CardItem>
									<Left>
										<Thumbnail source={require('../img/profile.jpg')} style={{ width:46, height:46 }}/>
										<Body>
											<Text style={{ fontSize:14, color:'#4A4A4A' }}>{data.name}</Text>
											<Text note style={{ marginTop:6, fontSize:11, color:'#4A4A4A' }}>{data.bookCount} Kitaptan {data.quoteCount} Sözü var</Text>
										</Body>
									</Left>
									<TouchableHighlight>
										<Icon name="bookmark" style={{ fontSize:18 }}/>
									</TouchableHighlight>
									<TouchableHighlight>
										<Icon name="bookmark" style={{ fontSize:18 }}/>
									</TouchableHighlight>
								</CardItem>
								<CardItem content>
		                              <Text>{ data.quote }</Text>
		                        </CardItem>
							</Card>
						)}
			        />


				</Content>

				<Footer>
					<FooterTab style={{ backgroundColor:'#FFFFFF' }}>
						<Button>
							<Icon name="bookmark-border" style={css.footerTabIcon}/>
							<Text style={css.footerTabText}>Sözlerim</Text>
						</Button>
						<Button>
							<Icon name="bookmark" style={css.footerTabIcon}/>
							<Text style={css.footerTabText}>Keşfet</Text>
						</Button>
						<Button>
							<Icon name="bookmark" style={css.footerTabIcon}/>
							<Text style={css.footerTabText}>Ekle</Text>
						</Button>
						<Button>
							<Icon name="bookmark" style={css.footerTabIcon}/>
							<Text style={css.footerTabText}>Hesabım</Text>
						</Button>
						<Button>
							<Icon name="bookmark" style={css.footerTabIcon}/>
							<Text style={css.footerTabText}>Diğer</Text>
						</Button>
					</FooterTab>
				</Footer>
			</View>
		);

	}
}
