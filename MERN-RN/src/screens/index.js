import { createStackNavigator } from 'react-navigation';

import NewsFeed from './NewsFeed';
import AddTweet from './AddTweet';

const Navigator = createStackNavigator(
	{
		newsFeed: NewsFeed,
		addTweet: AddTweet
	},
	{
		initialRouteName: 'newsFeed',
		backBehavior: 'initialRoute'
	}
);

export default Navigator;
