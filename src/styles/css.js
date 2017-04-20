import {
	//Platform,
	StyleSheet,
} from 'react-native';

export const css = StyleSheet.create({
	buttonGroup:{
		flexDirection:'row'
	},

	containerWrap: {
		backgroundColor: 'white',
		flex: 1
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
		fontWeight:'600'
	},

	welcomeTextTouched: {
		color:'white',
		fontSize:15,
		fontWeight:'600',
	},

	headerTitle: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '#4a4a4a'
	},

	upperSmallText: {
		fontSize:11,
		fontWeight:'bold',
		color: '#50D688',
		backgroundColor: 'transparent'
	},

	bigText: {
		fontSize:26,
		lineHeight:31,
		fontWeight:'300',
		backgroundColor: 'transparent'
	},

	contentWrap: {
		paddingVertical: 24,
		paddingHorizontal: 40,
	},
	footerTabIcon:{
		fontSize:26,
		color:'#9B9B9B'
	},
	footerTabText:{
		fontSize:10,
		color:'#929292'
	},
	footerTabTextClick:{
		fontSize:10,
		color:'#50D688'
	},
	footerTabSmallText:{
		fontSize:7,
		color:'#929292'
	},
	editProfileLabel:{
		color:'rgba(51,51,51,0.4)',
		fontSize:15,
		fontWeight:'500'
	},
	xSmallText: {
		fontSize: 11,
		color: 'rgba(51,51,51,0.4)',
		lineHeight: 15,
	},
	navigatorTitle: {
		fontSize: 12, fontWeight: 'bold', color: '#4a4a4a'
	},
	searchBookName: { color: 'blue' }
});
