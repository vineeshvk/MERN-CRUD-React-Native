import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { FAB, DefaultTheme } from 'react-native-paper';
import ActionSheet from 'react-native-actionsheet';
import { connect } from 'react-redux';

import { fetchTweetAction } from '../actions';
import { ListItem } from '../components';
import { deleteTweetAction } from '../actions/auth.actions';

import { whiteColor, blueColor } from '../config/colors';

class NewsFeed extends Component {
	static navigationOptions = {
		title: 'MERN'
	};

	componentDidMount() {
		this.props.fetchTweetAction();
	}

	tweetActions = id => {
		this.id = id;
		this.ActionSheet.show();
	};

	deleteTweetHandler = () => {
		this.props.deleteTweetAction({ id: this.id });
	};

	render() {
		const { container, fabContainer, fabStyle, loadingContainer } = styles;
		const { loading, tweets, navigation } = this.props;
		if (loading) {
			return (
				<View style={loadingContainer}>
					<ActivityIndicator size="large" />
				</View>
			);
		}
		return (
			<View style={container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<FlatList
						showsVerticalScrollIndicator={false}
						data={tweets}
						renderItem={({ item }) => <ListItem tweetActions={this.tweetActions} data={item} />}
						keyExtractor={(item, index) => `${index}`}
					/>

					<View style={{ height: 70 }} />
				</ScrollView>
				<View style={fabContainer}>
					<FAB
						theme={fabTheme}
						icon="add"
						label="Add"
						onPress={() => {
							navigation.navigate('addTweet');
						}}
						style={fabStyle}
					/>
				</View>
				<ActionSheet
					ref={o => (this.ActionSheet = o)}
					options={['delete', 'cancel']}
					cancelButtonIndex={1}
					destructiveButtonIndex={0}
					onPress={index => {
						if (index === 0) this.deleteTweetHandler();
					}}
				/>
			</View>
		);
	}
}

const fabTheme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, accent: blueColor } };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: whiteColor
	},
	fabContainer: {
		alignItems: 'center'
	},
	fabStyle: {
		width: 130,
		position: 'absolute',
		bottom: 15
	},
	text: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	loadingContainer: {
		justifyContent: 'center',
		flex: 1,
		backgroundColor: whiteColor
	}
});

const mapStateToProps = state => {
	const { tweets, loading } = state.auth;
	return { tweets, loading };
};

export default connect(
	mapStateToProps,
	{ fetchTweetAction, deleteTweetAction }
)(NewsFeed);
