/**
 * Booksaying App with React Native
 * https://github.com/facebook/react-native
 * @flow
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
	}

	render() {
		return(
			<Navigator
					initialRoute={{
						id: 'Welcome',
						name: 'Welcome'
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
