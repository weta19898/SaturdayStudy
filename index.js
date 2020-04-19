const express = require('express' );
const app = express();
app.get('/', (req, res) => {
		console.log('Request My Hello World' );
		res.send('Hello World' );
});
app.listen(3000, () => {
		console.log('My Node is listening on port 3000!' );
});

