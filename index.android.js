/**
 * Booksaying App with React Native
 * https://github.com/facebook/react-native
 * Author by @haibnu, @gomod0r
 */
import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	StatusBar
} from 'react-native';

import Welcome from './src/components/Welcome/Welcome';
import Login from './src/components/login';
import Register from './src/components/register';
import ForgotPassword from './src/components/forgot-password';
import Discovery from './src/components/discovery';
import MyFeed from './src/components/myfeed';
import MyProfile from './src/components/myprofile';
import EditProfile from './src/components/editprofile';
import Add from './src/components/addANDROID';
import BookSearch from './src/components/booksearch';
import Other from './src/components/other';
import EmailRequired from './src/components/emailrequired';
import BookDetail from './src/components/bookdetail';
import QuoteDetail from './src/components/quotedetail';
import Card from './src/components/card'

export default class bookSaying extends Component {
	renderScene(route, navigator){

		var routeId = route.id;

		if(routeId === 'Login'){
			return <Login navigator={navigator}/>;
		}
		if(routeId === 'Register'){
			return <Register navigator={navigator}/>;
		}
		if(routeId === 'Welcome'){
			return <Welcome navigator={navigator}/>;
		}
		if(routeId === 'ForgotPassword'){
			return <ForgotPassword navigator={navigator}/>;
		}
		if(routeId === 'Discovery'){
			return <Discovery navigator={navigator}/>;
		}
		if(routeId === 'MyFeed'){
			return <MyFeed navigator={navigator}/>;
		}
		if(routeId === 'MyProfile'){
			return <MyProfile navigator={navigator}/>;
		}
		if(routeId === 'EditProfile'){
			return <EditProfile navigator={navigator}/>;
		}
		if(routeId === 'Add'){
			return <Add navigator={navigator}/>;
		}
		if(routeId === 'BookSearch'){
			return <BookSearch navigator={navigator}/>;
		}
		if(routeId === 'Other'){
			return <Other navigator={navigator}/>;
		}
		if(routeId === 'EmailRequired'){
			return <EmailRequired navigator={navigator}/>;
		}
		if(routeId === 'BookDetail'){
			return <BookDetail navigator={navigator}/>;
		}
		if(routeId === 'QuoteDetail'){
			return <QuoteDetail navigator={navigator}/>;
		}
	}

	render(){
		return(
			<Navigator
				initialRoute={{
					id: 'Discovery'
				}}
				renderScene={
					this.renderScene.bind(this)
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
	},
	welcome: {
	fontSize: 20,
	textAlign: 'center',
	margin: 10,
	},
	instructions: {
	textAlign: 'center',
	color: '#333333',
	marginBottom: 5,
	},
});

AppRegistry.registerComponent('bookSaying', () => bookSaying);
