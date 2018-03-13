var friendsList = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(request, response){
		res.json(friendsList);
	});
	app.post("/api/friends", function(request, response){
		friendsList.push(request.body);	
	});

}