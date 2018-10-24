var express = require('express');
var BodyParser = require('body-parser');

var check = express();

check.use(BodyParser.urlencoded({extended:false}));
check.use(BodyParser.json());

check.get('/check', function(req, res){
	res.sendFile(__dirname + "/" + "form_post.html");
});

check.post('/formuser2', function(req, res){
	response = {
		new_name : req.body.new_name,
		reg_no : req.body.reg_no,
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = check.listen(6969, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Currently on http://%s:%s", host, port);
});