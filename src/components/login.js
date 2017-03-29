import React, { Component } from 'react';

import {
	TextInput,
	TouchableHighlight,
	AsyncStorage,
	Text,
	View,
	StyleSheet
}from 'react-native';

const ACCESS_TOKEN = 'access_token';

export default class Login extends Component{

	constructor(){
		super();

		this.state = {
			email: "",
			password: "",
			error: ""
		}
	}

	redirect(routeName, token){
		this.props.navigator.push({
			name: routeName,
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

	render(){
		return(
			<View style={ styles.container }>
				<TextInput
					onChangeText={ (text) => this.setState({ email: text }) }
					style={ styles.input }
					placeholder="Email"
				/>
				<TextInput
					onChangeText={ (text) => this.setState({ password: text }) }
					style={ styles.input }
					placeholder="Password"
					secureTextEntry={ true }
				/>
				<TouchableHighlight
					onPress={this.onLoginPressed.bind(this)}
					style={ styles.button }>
					<Text style={ styles.buttonText }>
						Login
					</Text>
				</TouchableHighlight>
				<Text style={ styles.error }>
					{ this.state.error }
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		padding: 10,
		paddingTop: 80
	},
	input: {
		height: 50,
		width:300,
		marginTop: 10,
		padding: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48bbec'
	},
	button: {
		height: 50,
		backgroundColor: '#48BBEC',
		alignSelf: 'stretch',
		marginTop: 10,
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 22,
		color: '#FFF',
		alignSelf: 'center'
	},
	heading: {
		fontSize: 30,
	},
	error: {
		color: 'red',
		paddingTop: 10
	},
	success: {
		color: 'green',
		paddingTop: 10
	},
	loader: {
		marginTop: 20
	}
});
