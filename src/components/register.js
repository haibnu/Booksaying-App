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

import {css} from '../styles/css';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

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
						<Title style={{ fontSize: 12, fontWeight: 'bold', color: '#4a4a4a' }}>ARAMIZA KATIL</Title>
					</Body>
					<Right></Right>
				</Header>
				<Content>
					<View style={{ paddingVertical:24, paddingHorizontal: 40 }}>

						<Text style={[css.upperSmallText, { marginBottom: 8 }]}>HEY, ORADAKİ 👋</Text>
						<Text style={css.bigText}>Neden biz biraz anlatsana?</Text>

						<Form>

							<Item floatingLabel style={{marginLeft: 0, borderWidth:.5}}>
								<Label style={{ color:'#999' }}>Kullanıcı Adı Belirle</Label>
								<Input/>
							</Item>

							<Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 12}}>
								<Label style={{ color:'#999' }}>Şifre</Label>
								<Input/>
							</Item>

							<Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 12}}>
								<Label style={{ color:'#999' }}>Şifre Tekrar</Label>
								<Input/>
							</Item>

							<Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 12}}>
								<Label style={{ color:'#999' }}>E-Posta</Label>
								<Input/>
							</Item>

							<Grid>
								<Row>
									<Col>
										<Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 12}}>
											<Label style={{ color:'#999' }}>Adın</Label>
											<Input/>
										</Item>
									</Col>
									<Col style={{ marginLeft: 16 }}>
										<Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 12}}>
											<Label style={{ color:'#999' }}>Soyadın</Label>
											<Input/>
										</Item>
									</Col>
								</Row>
							</Grid>

							<Button full style={{ backgroundColor:'#50D688', borderRadius: 3, marginTop: 24 }}>
								<Text style={{ color:'white', fontWeight: '600', fontSize: 15, }}>Kayıt Ol</Text>
						 	</Button>

							<Row style={{ justifyContent: 'center' }}>
								<Text style={{ marginVertical: 20, fontWeight: '600', fontSize: 14, color: '#999' }}>
									Sosyal ağlar ile hemen kayıt ol
								</Text>
							</Row>

							<Button full iconLeft style={{ backgroundColor:'#3B5998', borderRadius: 3}}>
								<Icon name='logo-facebook' />
								<Text style={{ color:'white', fontWeight: '600', fontSize: 15, }}>Facebook ile Giriş Yap</Text>
						 	</Button>

							<Button full iconLeft style={{ backgroundColor:'#1DA1F2', borderRadius: 3, marginTop: 16 }}>
								<Icon name='logo-twitter' />
								<Text style={{ color:'white', fontWeight: '600', fontSize: 15, }}>Twitter ile Giriş Yap</Text>
						 	</Button>

							<Text style={[css.xSmallText, {marginTop: 16}]}><B>Merak etmeyin!</B>{"\n"}Asla sizden izinsiz bir paylaşım yapmayız!{"\n"}Çünkü biz de bundan nefret ediyoruz.</Text>

							<Button
								transparent
								style={{
									paddingHorizontal: 0,
									marginTop: 24
								}}
								onPress={() => {
									this.props.navigator.push({
										id: 'Login'
									});
								}}>
								<Text style={{ color: '#4A4A4A' }}>Hesabın mı var? <B>Giriş Yap</B></Text>
							</Button>
						</Form>

					</View>
				</Content>
			</Container>
		)
	}
}
