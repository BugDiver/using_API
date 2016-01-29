var unirest = require('unirest');

var createRepos = function(repoName){
	var url = "https://api.github.com/user/repos"
	var token = 'Token '+ process.env.TOKEN;
	var headers = {'Authorization': token,'Accept': 'application/json','User-Agent': 'Unirest Node.js'};
	var Request = unirest.post(url);
	Request.headers(headers).send(JSON.stringify({'name' : repoName})).end(function (response) {
		console.log(response);
	});
};

createRepos(process.argv[2]);