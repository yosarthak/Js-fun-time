var check = require('express');
var appnew = check();

appnew.get('/csi/', function (req, res){
	res.send('Namit whats the count');
});

appnew.listen(6969, function() {
	console.log('Hello Namit Ultra Chutiya CSI, running on port 6969 I believe');
});

//Commit for git