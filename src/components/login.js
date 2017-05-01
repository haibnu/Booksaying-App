import React, {Component} from 'react';
import {
	TouchableHighlight,
	Text,
	View,
	StatusBar,
	Image,
	StyleSheet,
	Platform,
	AsyncStorage
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

const ACCESS_TOKEN = 'access_token';

export default class Login extends Component {
	constructor(){
		super();

		this.state = {
			email: "",
			password: "",
			error: ""
		}
	}

	redirect(routeName, token){
		this.props.navigator.resetTo({
			id: routeName,
			passProps: {
				accessToken: this.props.accessToken
			}
		})
	}

	async storeToken(accessToken){
		try {
			await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
			this.getToken();
		} catch (error) {
			console.log("something went wrong")
		}
	}

	async getToken(){
		try {
			let token = await AsyncStorage.getItem(ACCESS_TOKEN);
			console.log("token is: " + token);
		} catch (error) {
			console.log("something went wrong")
		}
	}

	async removeToken(){
		try {
			await AsyncStorage.removeItem(ACCESS_TOKEN);
			this.getToken();
		} catch (error) {
			console.log("something went wrong")
		}
	}

	async onLoginPressed(){
		try {
			let response = await fetch('https://afternoon-beyond-22141.herokuapp.com/api/login',{
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					session: {
						email: this.state.email,
						password: this.state.password,
					}
				})
			});
			let res = await response.text();
			if(response.status >= 200 && response.status < 300) {
				this.setState({ error: "" });
				let accessToken = res;
				this.storeToken(accessToken);
				console.log("res token: " + accessToken);
				this.redirect('Discovery', accessToken);
			}
			else {
				let error = res;
				throw error;
			}
		}catch(error){
			this.removeToken();
			this.setState({ error: error });
			console.log("error" + error);
		}
	}

	render() {
		return (
			<View style={css.containerWrap}>
				<Header noShadow style={{ paddingLeft:(Platform.OS === 'android') ? 0 : 16, backgroundColor:'transparent', borderBottomColor:'transparent' }}>
				    <Left>
						<Button
							transparent
							onPress={() => {
								this.props.navigator.pop();
							}}>
							<Icon name='arrow-back' style={{color: '#50D688'}} />
						</Button>
					</Left>
					<Body>
						<Title style={{ fontSize: 12, fontWeight: 'bold', color: '#4a4a4a' }}>GİRİŞ YAP</Title>
					</Body>
					<Right></Right>
				</Header>
				<View style={css.contentWrap }>

					<Text style={[css.upperSmallText, { marginBottom: 8 }]}>HEY, ORADAKİ 👋</Text>
					<Text style={css.bigText}>Tekrar {"\n"}Hoşgeldin!</Text>

					<Form>

						<Item floatingLabel style={{marginLeft: 0, borderWidth:.5}}>
							<Label style={{ color:'#999' }}>Kullanıcı Adı veya E-Posta</Label>
							<Input onChangeText={ (text) => this.setState({ email: text }) }
								   keyboardType={'email-address'}/>
						</Item>

						<Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 12}}>
							<Label style={{ color:'#999' }}>Şifre</Label>
							<Input onChangeText={ (text) => this.setState({ password: text }) }
							       secureTextEntry={true}/>
						</Item>


						<Button transparent style={{ paddingHorizontal: 0, alignSelf: 'flex-end', marginTop: 16 }}>
							<Text
								style={{ color:'#50D688' }}
								onPress={() => {
									this.props.navigator.push({
										id: 'ForgotPassword'
									});
								}}>
								Şifreni mi Unuttun?
							</Text>
						</Button>


						<Button
							full
							style={{ backgroundColor:'#50D688', borderRadius: 3, marginTop: 24 }}
							onPress={this.onLoginPressed.bind(this)}>
							<Text style={{ color:'white', fontWeight: '600', fontSize: 15, }}>Giriş Yap</Text>
					 	</Button>

						<Text>
							{this.state.error}
						</Text>

					</Form>

					<Button
						transparent
						style={{
							paddingHorizontal: 0,
							marginTop: 24
						}}
						onPress={() => {
							this.props.navigator.push({
								id: 'Register'
							});
						}}>
						<Text style={{ color: '#4A4A4A' }}>Hesabın yok mu?<B> Kayıt Ol</B></Text>
					</Button>

				</View>
			</View>
		)
	}
}
