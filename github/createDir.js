var unirest = require('unirest');

var createRepos = function(repoName){
	var url = "https://api.github.com/user/repos"
	var token = 'Token a01747b0b8f8db41691ff8f1ed2a5a6b15bd0a72';
	var headers = {'Authorization': token,'Accept': 'application/json','User-Agent': 'Unirest Node.js'};
	var Request = unirest.post(url);
	Request.headers(headers).send(JSON.stringify({'name' : repoName})).end(function (response) {
		console.log(response);
	});
};

createRepos(process.argv[2]);