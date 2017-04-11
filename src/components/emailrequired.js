import React, { Component } from 'react';

import {
    View,
    StatusBar,
    Text,
    TextInput,
    TouchableHighlight,
    Platform
} from 'react-native';

import {
    Header,
    Body,
    Title,
    Left, Right,
    Button
} from 'native-base';

import {css} from '../styles/css';

import Icon from 'react-native-vector-icons/MaterialIcons';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export default class EmailRequired extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={css.containerWrap}>
                <Header noShadow style={{ paddingLeft:(Platform.OS === 'android') ? 0 : 16, backgroundColor:'white' }}>
                    <StatusBar
                        backgroundColor='#BFBFBF'
                    />
                    <Left>
						<Button
							transparent
							onPress={() => {
								this.props.navigator.pop();
							}}>
							<Icon name='arrow-back' style={{ color: '#50D688', fontSize:24 }} />
						</Button>
					</Left>
                    <Body>
                        <Title style={{ fontSize:12, fontWeight:'bold', color:'#4A4A4A' }}>SON ADIM</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <View style={{ paddingTop:28, paddingLeft:40, flex:1 }}>
                    <Text style={{ color:'#50D688', fontSize:11, fontWeight:'bold' }}>BİLİYORUM</Text>
                    <Text style={{ color:'#50D688', fontSize:11, fontWeight:'bold' }}>BIKTIN FORM DOLDURMAKTAN</Text>
                    <Text style={{ paddingBottom:8, color:'#50D688', fontSize:11, fontWeight:'bold' }}>AMA</Text>
                    <Text style={{ color:'#4A4A4A', fontSize:26, fontWeight:'300' }}>Son bir adım kaldı</Text>
                    <TextInput underlineColorAndroid='rgba(51,51,51,0.4)' style={{ marginTop:35, marginBottom:24, width:295 }} placeholder='E-Posta' placeholderTextColor='rgba(51,51,51,0.4)' />
                    <TouchableHighlight style={{ backgroundColor:'#50D688', width:295, height:48, borderRadius:3, justifyContent:'center', alignItems:'center' }}>
                        <Text style={{ color:'#FFFFFF', fontSize:15, fontWeight:'600' }}>Üyeliği Tamamla</Text>
                    </TouchableHighlight>
                    <View style={{ height:60, width:295, marginTop:16  }}>
                        <Text style={{ color:'rgba(51,51,51,0.4)', fontSize:11, fontWeight:'600' }}>
                            E-Posta adresim neden gerekli?
                        </Text>
                        <Text style={{ color:'rgba(51,51,51,0.4)', fontSize:11, fontWeight:'600' }}>
                            Sizi doğrulamamız ve güvenirliğiniz için bu gerekli bir bilgidir. Merak etmeyin asla spam mail gönderim yapmayız. Çünkü biz de bundan nefret ediyoruz.
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection:'row', paddingLeft:24, paddingBottom:36 }}>
                    <Button transparent onPress={() => {
                                            this.props.navigator.push({
                                                id: 'Login'
                                            });
                                        }}>
                        <Text style={{ fontSize:13, color:'#4A4A4A' }}> Hesabın mı var? <B>Giriş Yap</B></Text>
                    </Button>
                </View>
            </View>
        );
    }
}
