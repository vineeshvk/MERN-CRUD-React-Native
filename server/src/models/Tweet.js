import mongoose, { Schema } from 'mongoose';

const TweetSchema = new Schema(
	{
		user: String,
		tweet: String,
		tweetDate: Date
	},
	{
		timestamps: true
	}
);

export default mongoose.model('Tweet', TweetSchema);
