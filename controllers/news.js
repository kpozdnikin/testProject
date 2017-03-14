var newsModel = require('../models/news');

var news = {};

// controller that handles news listings fetch request.
news.get = function (req, res) {
	var skip = req.query.skip;
	var limit = req.query.limit;
	var newsData = newsModel.get(skip, limit);
	newsData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.send(err);
	});

};

// controller that handles single news fetch request.
news.getOne = function (req, res) {
	var newsId = req.query.newsId;
	var newsData = newsModel.getOne(newsId);
	newsData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};

module.exports = news;