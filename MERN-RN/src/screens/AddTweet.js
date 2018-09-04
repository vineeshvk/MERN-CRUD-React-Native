import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { Button, DefaultTheme } from 'react-native-paper';

import { whiteColor, blueColor } from '../config/colors';
import { tweetChange, createTweetAction } from '../actions/auth.actions';

class AddTweet extends Component {
	static navigationOptions = {
		title: 'Add Something',
		headerVisible: true
	};

	addTweet = () => {
		if (this.props.tweet !== '') {
			this.props.createTweetAction({ user: 'user', tweet: this.props.tweet });
			this.props.navigation.navigate('newsFeed');
		}
	};

	render() {
		const { container, inputContainer, buttonContainer, button } = styles;

		return (
			<ScrollView
				style={{ backgroundColor: whiteColor }}
				showsVerticalScrollIndicator={false}
				keyboardShouldPersistTaps="always"
			>
				<View style={container}>
					<TouchableWithoutFeedback onPress={() => this.input.focus()}>
						<View style={inputContainer}>
							<TextInput
								onChangeText={value => this.props.tweetChange({ value, prop: 'tweet' })}
								value={this.props.tweet}
								autoFocus
								placeholderTextColor="#888"
								placeholder="What's happening?"
								underlineColorAndroid="transparent"
								multiline
								ref={input => (this.input = input)}
							/>
						</View>
					</TouchableWithoutFeedback>
					<View style={buttonContainer}>
						<Button
							color={blueColor}
							theme={{ ...DefaultTheme, roundness: 100 }}
							style={button}
							onPress={() => this.addTweet()}
							raised
						>
							add
						</Button>
					</View>
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	button: {
		width: 100
	},
	buttonContainer: {
		alignItems: 'center',
		paddingTop: 15
	},
	// textInput: {},
	container: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: whiteColor
	},
	inputContainer: {
		minHeight: 150,
		backgroundColor: '#eee',
		borderRadius: 10,
		padding: 10
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold'
	}
});

const mapStateToProp = state => {
	const { tweet } = state.auth;
	return { tweet };
};

export default connect(
	mapStateToProp,
	{ tweetChange, createTweetAction }
)(AddTweet);
