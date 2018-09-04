import { SERVER_URL } from './constants';

const tweetUrl = SERVER_URL;

const config = (url, method, body) =>
	fetch(url, {
		method,
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(response => response.json());

export const fetchTweets = () => fetch(tweetUrl).then(res => res.json());

export const createTweets = ({ user, tweet }) => config(tweetUrl, 'POST', { user, tweet });

export const deleteTweet = ({ id }) => config(tweetUrl, 'DELETE', { id });

// export const logIn = ({ email, password }) => config(userUrl, 'POST', { email, password });
