const express = require('express');
const BodyParser = require('body-parser');

const check = express();
const details = require('./routes/main_routes');

check.use('/details', details);

const server = check.listen(6969, function(){
	const host = server.address().address;
	const port = server.address().port;
	console.log("Testing on http://%s:%s", host, port);
});
