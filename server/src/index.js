import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './router';

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(
	'mongodb://localhost/tweets',
	{ useNewUrlParser: true }
);

const db = mongoose.connection;
db.once('open', () => console.log('mongodb is connected')).on('error', err =>
	console.error(err)
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(PORT, () => {
	console.log('server connected at ' + PORT);
});
