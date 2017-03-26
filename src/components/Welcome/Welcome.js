import React, {Component} from 'react';
import {
    TouchableHighlight,
    Text,
    View,
    StatusBar
} from 'react-native';
import {Container} from 'native-base';
const style = require('../../../styles/main');

export default class Welcome extends Component{
    render(){
        return(
            <Container style={{ paddingVertical:60, paddingHorizontal:45 }}>
                <View style={{ alignItems:'stretch', borderWidth:2, borderColor:'#50D688' ,flexDirection:'row',marginTop:200 }}>
                    <TouchableHighlight style={style.welcomeButton}>
                        <Text style={{ color:'green' }}>Giriş Yap</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[style.welcomeButton,{borderLeftWidth:2, borderLeftColor:'#50D688'}]}>
                        <Text style={{ color:'green', }}>Kayıt Ol</Text>
                    </TouchableHighlight>
                </View>
            </Container>
        );
    }
}
