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
import Discovery from './src/components/discovery';

export default class bookSaying extends Component {
	renderScene(route, navigator){
		var routeId = route.id;
		if(route.name === 'Login'){
			return <Login navigator={navigator}/>;
		}
        if(route.name === 'Discovery'){
			return <Discovery navigator={navigator} {...route.passProps}/>;
		}
		if(route.name === 'Register'){
			return <Register navigator={navigator}/>;
		}
		if(route.name === 'Welcome'){
			return <Welcome navigator={navigator}/>;
		}
	}
	render() {
		return(
            <Navigator
            	initialRoute={{
					name: 'Login'
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
