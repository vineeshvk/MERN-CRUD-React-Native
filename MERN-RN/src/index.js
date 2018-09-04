import React from 'react';
import { View, StatusBar } from 'react-native';
import Navigator from './screens';

export default class Main extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar barStyle="dark-content" />
				<Navigator />
			</View>
		);
	}
}
