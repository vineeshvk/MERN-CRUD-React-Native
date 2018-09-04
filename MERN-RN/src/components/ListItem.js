import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { IMAGE_URL } from '../config/constants';

const ListItem = ({ data, tweetActions }) => {
	const { tweet, user, _id } = data;
	const { userText, tweetText, container, imageContainer, image } = styles;

	return (
		<TouchableRipple onPress={() => tweetActions(_id)}>
			<View style={container}>
				<View style={imageContainer}>
					<Image
						source={{
							uri: IMAGE_URL
						}}
						style={image}
					/>
				</View>
				<View>
					<Text style={userText}>{user}</Text>
					<Text style={tweetText}>{tweet}</Text>
				</View>
			</View>
		</TouchableRipple>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#eee',
		paddingTop: 15,
		paddingBottom: 20,
		paddingLeft: 25,
		paddingRight: 25
	},
	userText: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	tweetText: {
		fontSize: 14
	},
	imageContainer: {
		width: 45,
		paddingTop: 5
	},
	image: {
		width: 35,
		height: 35,
		borderRadius: 20
	}
});
export default ListItem;
