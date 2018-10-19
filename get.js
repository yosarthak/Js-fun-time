var check = require('express');
var appnew = check();

appnew.get('/check', function (req, res){
	res.sendFile(__dirname + "/" + "form.html");
});

appnew.get('/formuser', function(req, res){
	response = {
		new_name : req.query.new_name,
		reg_no : req.query.reg_no
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = appnew.listen(6969, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Testing on http://%s:%s", host, port);
});