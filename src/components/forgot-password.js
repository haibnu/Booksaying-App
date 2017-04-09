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

export default class ForgotPassword extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View style={css.containerWrap}>
				<Header style={{ backgroundColor:'transparent', borderBottomColor:'transparent' }}>
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
						<Title style={{ fontSize: 12, fontWeight: 'bold', color: '#4a4a4a' }}>ŞİFREMİ UNUTTUM</Title>
					</Body>
					<Right></Right>
				</Header>
				<View style={css.contentWrap}>

					<Text style={[css.upperSmallText, { marginBottom: 8 }]}>HEY, DURUMLAR KÖTÜ HE?</Text>
					<Text style={css.bigText}>Merak Etme Bu Sorunu {"\n"}Halledeceğiz</Text>

					<Form style={{ marginTop: 16 }}>

						<Item floatingLabel style={{marginLeft: 0, borderWidth:.5}}>
							<Label style={{ color:'#999' }}>E-Posta Adresini Gir</Label>
							<Input keyboardType={'email-address'}/>
						</Item>

						<Button full style={{ backgroundColor:'#50D688', borderRadius: 3, marginTop: 24 }}>
							<Text style={{ color:'white', fontWeight: '600', fontSize: 15, }}>Şifremi Sıfırla</Text>
					 	</Button>

					</Form>

				</View>
			</View>
		)
	}
}
