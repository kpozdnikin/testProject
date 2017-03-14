var Events = require('../models/events');
var News = require('../models/news');

var helpers = {};

//Function to populate data in DB if DB is empty.
helpers.populateDb = function(){
	var promise = Events.get();
	promise.then(function(data){
		if(data.length){
			console.log('Events table already populated.');
		}
		else{
			console.log('Populating users table.');
			Events.seed();
		}
	});

	var promise2 = News.get();
	promise2.then(function(data){
		
		if(data.length){
			console.log('News table already populated.');
		}
		else{
			console.log('Populating News table.');
			News.seed();
		}
	});
};

module.exports = helpers;
