var eventsModel = require('../models/events');

var events = {};

// controller that handles events listings fetch request.
events.get = function (req, res) {
	
	var skip = req.query.skip;
	var limit = req.query.limit;
	var eventsData = eventsModel.get(skip, limit);
	eventsData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.send(err);
	});

};

// controller that handles single event fetch request.
events.getOne = function (req, res) {
	var eventId = req.query.eventId;
	var eventsData = eventsModel.getOne(eventId);
	eventsData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};

module.exports = events;