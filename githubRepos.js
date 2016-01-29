var url = "https://api.github.com/users/username/repos";
var unirest = require('unirest');

var showRepos = function(repoDetails){
	repoDetails.forEach(function(repoDetail ,index){
		console.log(index+1+':'	,repoDetail.name);
	});
}

var getReposOf = function(username){
	var Request = unirest.get(url.replace('username',username));
	var headers = {'Accept': 'application/json','User-Agent': 'Unirest Node.js'};
	Request.headers(headers).end(function (response) {
		showRepos(response.body);
	});
};

getReposOf(process.argv[2]);