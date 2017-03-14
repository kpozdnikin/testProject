var events = require('../controllers/events');
var news = require('../controllers/news');
var helpers = require('../helpers/helperFunctions');

var routesAPI = function(app){
	//events routes
	app.get('/api/events', helpers.isAuthenticated, events.get);
	app.get('/api/events/:eventId', helpers.isAuthenticated, events.getOne);

	//news routes
	app.get('/api/news', helpers.isAuthenticated, news.get);
	app.get('/api/news/:newsId', helpers.isAuthenticated, news.getOne);
}


module.exports = routesAPI;