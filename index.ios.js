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
	Navigator
} from 'react-native';

import Welcome from './src/components/Welcome/Welcome';
import Login from './src/components/login';
import Register from './src/components/register';
import ForgotPassword from './src/components/forgot-password';

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

	}

	render() {
		return(
			<Navigator
					initialRoute={{
						id: 'Welcome'
					}}
					renderScene={
						this.renderScene.bind(this)
					}
			/>
		);
	}
}

const styles = StyleSheet.create({
	// styles
});

AppRegistry.registerComponent('bookSaying', () => bookSaying);
