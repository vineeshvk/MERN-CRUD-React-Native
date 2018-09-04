import { AsyncStorage } from 'react-native';

import {
	AUTH_DETAIL_CHANGE,
	LOG_IN,
	TWEET_VALUE_CHANGE,
	FETCH_ALL_TWEETS,
	LOADING,
	DELETE_TWEET,
	CREATE_TWEET
} from './types.actions';
import { logIn, fetchTweets, deleteTweet, createTweets } from '../config/api';

export const authDetailChange = value => ({
	type: AUTH_DETAIL_CHANGE,
	payload: value
});

export const logInAction = ({ email, password }) => async dispatch => {
	const data = await logIn({ email, password });
	const { user } = data;
	await AsyncStorage.setItem('userToken', user.token);
	console.log(user.token);

	dispatch({ type: LOG_IN, payload: data });
};

export const tweetChange = value => ({
	type: TWEET_VALUE_CHANGE,
	payload: value
});

export const fetchTweetAction = () => async dispatch => {
	dispatch({ type: LOADING, payload: true });
	const data = await fetchTweets();
	dispatch({ type: FETCH_ALL_TWEETS, payload: data });
};

export const deleteTweetAction = ({ id }) => async dispatch => {
	const data = await deleteTweet({ id });
	dispatch({ type: DELETE_TWEET, payload: data });
};

export const createTweetAction = ({ user, tweet }) => async dispatch => {
	const data = await createTweets({ user, tweet });
	dispatch({ type: CREATE_TWEET, payload: data });
};
