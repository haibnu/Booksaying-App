import {
	StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
	buttonGroup:{
		flexDirection:'row'
	},

	welcomeButton:{
		paddingVertical:15,
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'transparent'
	},

	welcomeText: {
		color:'#50D688',
		fontSize:15,
		fontWeight:'600',
	},

	welcomeTextTouched: {
		color:'white',
		fontSize:15,
		fontWeight:'600',
	}
});
