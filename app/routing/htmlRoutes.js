var path = require("path");

module.exports = function(app){


	app.get("/home", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/home.html"));
  	});
	//path to the survey
	app.get("/friendsSurvey", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/survey.html"));
  	});

}