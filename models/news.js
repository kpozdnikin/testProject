var mongoose = require('mongoose');
var q = require('q');

//defining schema for events table
var newsSchema = new mongoose.Schema({
	name: String,
	description: String,
	text: String
});

var News = mongoose.model('news', newsSchema);

//Initlizing interface object of this model.
var newsModel = {};

//Function to seed news data.
newsModel.seed = function(){
	var news = Array();
	news.push({name: 'Donald Trump Wins!', description:'A great history of the United States has began'});
	news.push({name: 'Hillary Clinton falls', description:'This time its political and its for good'});

	var dataToInsert = Array();
	for(var i = 0; i < 100; i++){
		var index = i%6;
		var newsObject = JSON.parse(JSON.stringify(news[index])); //cloning object
		newsObject.name = '[' + i + '] ' + newsObject.name;
		dataToInsert.push(newsObject);
	}
	News.collection.insert(dataToInsert, function(err, dbNews) {
		if(err){
			console.log('error occured in populating news database');
			console.log(err);
		}
		else{
			console.log('News table populated.');
		}
	});
};

//function to get news listings
newsModel.get = function(skip, limit){
	var results = q.defer();

	skip = parseInt(skip) || 0;
	limit = parseInt(limit) || 10;

	News.find(function(err, dbNews) {
		if (err){
			results.reject(err);
		}
		results.resolve(dbNews);

	}).skip(skip).limit(limit);
	return results.promise;
};

//function to get single news by its id.
newsModel.getOne = function(id){
	var results = q.defer();
	if(!id){
		results.reject({status:'error', error:'News Id not supplied.'});
	}
	News.findOne({_id:id},function(err, dbNews) {
		if (err){
			results.reject(err);
		}
		if(dbNews){
			results.resolve(dbNews);
		} else{
			results.reject({status:'error', error:'Invalid news Id supplied.'});
		}
	});
	return results.promise;
};

module.exports = newsModel;