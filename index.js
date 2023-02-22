const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./server/schema/schema');
app.use(express.json());
app.use(express.static('public'));
app.get('/a', (req, res) => {
	res.send('Hello tesss');
});
app.get('/', (req, res) => {
	res.send('Hello');
});
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	}),
);
app.listen(8080, () => {
	console.log('Server started');
});
