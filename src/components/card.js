import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
	TouchableHighlight,
} from 'react-native';

import {
	Grid, Row, Col
} from 'native-base';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Card extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<View {...this.props} style={css.cardContainer}>
					<View style={css.cardBody}>
						<Grid>
							<Row>
								<Col style={{ width: profileAvatarSize + 16 }}>
									<Image
										style={css.profilePhoto}
										source={require('../img/profile.jpg')} />
								</Col>
								<Col style={css.cardInfo}>
									<Text onPress={() => {
												this.props.navigator.push({
													id: 'MyProfile'
												});
											}}
										style={css.primaryText}
										numberOfLines={1}>
										{this.props.primaryText}
									</Text>
									<Text
										style={css.secondaryText}>
										{this.props.secondaryText}
									</Text>
								</Col>
								<View style={[css.actionButtonWrap]}>
									<TouchableWithoutFeedback hitSlop={{ top:20 }}>
										<MaterialCommunityIcons name="bookmark-plus-outline" style={css.actionButton}/>
									</TouchableWithoutFeedback>
									<TouchableWithoutFeedback hitSlop={{ top:20 }}>
										<MaterialCommunityIcons name="dots-vertical" style={css.actionButton}/>
									</TouchableWithoutFeedback>
								</View>
							</Row>
							<Text onPress={() => {
										this.props.navigator.push({
											id: 'QuoteDetail'
										});
									}} style={css.sayingSummary}>{this.props.sayingSummary}</Text>
						</Grid>
					</View>
			</View>
		);
	}
}

const profileAvatarSize = 46;
const horizontalOffset = 24;
const verticalOffset = 16;

const css = StyleSheet.create({
	cardContainer: {
		position: 'relative',
		marginBottom: 16,
		shadowRadius: 2,
		shadowOffset: { width:0, height:2 },
		shadowColor: 'rgba(51,51,51,0.08)',
		shadowOpacity: 1,
		backgroundColor: 'white',
		borderColor: 'rgba(51,51,51,0.08)',
		borderWidth: 0.5,
		borderRadius: 3,
	},
	cardBody: {
		overflow: 'hidden',
		backgroundColor: 'transparent',
		paddingVertical: verticalOffset,
		paddingHorizontal: horizontalOffset,
		paddingRight: 0,
	},
	profilePhoto: {
		height: profileAvatarSize,
		width: profileAvatarSize,
		borderRadius: profileAvatarSize/2,
	},
	cardInfo: {
		justifyContent: 'center',
	},
	primaryText: {
		marginBottom: 6,
		color: '#4A4A4A',
		fontSize: 14,
		lineHeight: 16,
		fontWeight: '600',
	},
	secondaryText: {
		color: '#4A4A4A',
		fontSize: 11,
		lineHeight: 13,
		fontWeight: 'normal',
	},
	sayingSummary: {
		marginTop: verticalOffset,
		color: '#4A4A4A',
		fontSize: 18,
		lineHeight: 25,
		fontFamily: 'Georgia'
	},
	actionButtonWrap: {
		flex: 0,
		width: 60,
		marginTop: -verticalOffset,
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
	actionButton: {
		paddingVertical: verticalOffset,
		paddingRight: 10,
		color: '#9B9B9B',
		fontSize: 18,
		//height: 18,
	},
});
