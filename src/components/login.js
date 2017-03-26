import React, {Component} from 'react';
import {
	TouchableHighlight,
	Text,
	View,
	StatusBar,
	Image,
	StyleSheet,
} from 'react-native';

import {
	Container,
	Content,
	Button,
	Left,
	Right,
	Body,
	Header,
	Icon,
	Title,
	Form,
	Item,
	Input,
	Label,
	Col, Row, Grid,
} from 'native-base';

//var css = require('../styles/css');
import css from '../styles/css';

export default class Login extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<Container style={{ backgroundColor: 'white' }}>
				<Header style={{ backgroundColor:'transparent', borderBottomColor:'transparent' }}>
				  <Left>
						<Button
							transparent
							onPress={() => {
								this.props.navigator.push({
									id: 'Welcome'
								});
							}}>
							<Icon name='arrow-back' style={{color: '#50D688'}} />
						</Button>
					</Left>
					<Body>
						<Title style={{ fontSize: 12, fontWeight: 'bold', color: '#4a4a4a' }}>GİRİŞ YAP</Title>
					</Body>
					<Right></Right>
				</Header>
				<Content style={{ paddingVertical: 24, paddingHorizontal: 40 }}>

					<Text style={[css.upperSmallText, { marginBottom: 8 }]}>HEY, ORADAKİ 👋</Text>
					<Text style={css.bigText}>Tekrar</Text>
					<Text style={css.bigText}>Hoşgeldin!</Text>

					<Form>

						<Item floatingLabel style={{marginLeft: 0, borderWidth:.5}}>
							<Label style={{ color:'#999' }}>Kullanıcı Adı veya E-Posta</Label>
							<Input/>
						</Item>

						<Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 12}}>
							<Label style={{ color:'#999' }}>Şifre</Label>
							<Input/>
						</Item>


						<Button transparent style={{ paddingHorizontal: 0, alignSelf: 'flex-end', marginTop: 16 }}>
							<Text style={{ color:'#50D688' }}>Şifreni mi Unuttun?</Text>
						</Button>


						<Button full style={{ backgroundColor:'#50D688', borderRadius: 3, marginTop: 24 }}>
							<Text style={{ color:'white', fontWeight: '600', fontSize: 15, }}>Giriş Yap</Text>
					 	</Button>

					</Form>

					<Button
						transparent
						style={{ paddingHorizontal: 0, marginTop: 40 }}
						onPress={() => {
							this.props.navigator.push({
								id: 'Register'
							});
						}}>
						<Text style={{ color:'#4A4A4A', fontSize:13, }}>Hesabın yok mu?</Text>
						<Text style={{ color:'#4A4A4A', fontSize:13, fontWeight: '600', marginLeft: 5 }}>Kayıt Ol</Text>
					</Button>

				</Content>
			</Container>
		)
	}
}
