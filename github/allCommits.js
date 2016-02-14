var unirest =require('unirest');

var collectAllCommits = function(owner,repo,branch,sha){
	var time = new Date().toISOString();
	var url = 'https://api.github.com/repos/'+owner+'/'+repo+'/commits?'+branch+'=100&sha='+sha;
	var Request = unirest.get(url);
	var headers = {'Accept': 'application/json','User-Agent': 'Unirest Node.js'};
	Request.headers(headers).end(function (response) {
		response.body.forEach(function(commitDetails,i){
			console.log('======================== '+i+' =============================================\n');
			console.log(commitDetails.commit.committer.name,'\n\n',commitDetails.commit.message);
		});
	});
};


var getAllCommits = function(owner,repo){
	var url = "https://api.github.com/repos/"+owner+"/"+repo+"/branches";
	var Request = unirest.get(url);
	var headers = {'Accept': 'application/json','User-Agent': 'Unirest Node.js'};
	Request.headers(headers).end(function (response) {
		branches = response.body.forEach(function(branch){
			collectAllCommits(owner ,repo,branch.name ,branch.commit.sha);
		});
	});
};
getAllCommits(process.argv[2],process.argv[3]);
