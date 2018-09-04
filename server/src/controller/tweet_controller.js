import Tweet from '../models/Tweet';

export const createTweet = (req, res) => {
	const { user, tweet } = req.body;
	const newTweet = new Tweet({ user, tweet });

	newTweet
		.save()
		.then(() => Tweet.find())
		.then(val => res.json(val));
};

export const viewTweet = (req, res) => {
	Tweet.find().then(() => {
		Tweet.find().then(val => res.json(val));
	});
};

export const deleteTweet = (req, res) => {
	const { id } = req.body;
	Tweet.findByIdAndRemove(id).then(val => {
		Tweet.find().then(val => res.json(val));
	});
};
