var unirest =require('unirest');

var getContributers = function(owner,repo){
	var url = "https://api.github.com/repos/"+owner+"/"+repo+"/contributors";
	var Request = unirest.get(url);
	var headers = {'Accept': 'application/json','User-Agent': 'Unirest Node.js'};
	Request.headers(headers).end(function (response) {
		var contri = response.body.forEach(function(cDeatails){
			console.log(cDeatails.login,'\n\tcontributions===>',cDeatails.contributions);
		})
	});
};

getContributers(process.argv[2],process.argv[3]);