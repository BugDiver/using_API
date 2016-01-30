var unirest = require('unirest');

var createRepos = function(user,repoName){
	var url = "https://api.github.com/repos/"+user+"/"+repoName;
	console.log(url);
	var token = 'Token a01747b0b8f8db41691ff8f1ed2a5a6b15bd0a72';
	var headers = {'Authorization': token,'Accept': 'application/json','User-Agent': 'Unirest Node.js'};
	var Request = unirest.delete(url);
	Request.headers(headers).end(function (response) {
		console.log(response);
	});
};

createRepos(process.argv[2],process.argv[3]);