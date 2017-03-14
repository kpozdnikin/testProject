var mongoose = require('mongoose');
var q = require('q');

//defining schema for news table
var newsSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	dateCreate: { type: Date, default: Date.now },
	text: String
});

var News = mongoose.model('news', newsSchema);

//Initlizing interface object of this model.
var newsModel = {};

//Function to seed news data.
newsModel.seed = function(){
	var news = Array();
	news.push({name: 'Новость 1', description:'Описание новости 1', dateCreate: "01-02-2017", image:'', text: 'Полный текст новости 1'});
	news.push({name: 'Новость 2', description:'Описание новости 2', dateCreate: "02-02-2017", image:'', text: 'Полный текст новости 2'});
	news.push({name: 'Новость 3', description: 'Описание новости 3', dateCreate: "03-02-2017", image:'', text: 'Полный текст новости 3'});
	news.push({name: 'Новость 4', description:'Описание новости 4', dateCreate: "04-02-2017", image:'', text: 'Полный текст новости 4'});
	news.push({name: 'Новость 5', description:'Описание новости 5', dateCreate: "05-02-2017", image:'', text: 'Полный текст новости 5'});
	news.push({name: 'Новость 6', description: 'Описание новости 6', dateCreate: "06-02-2017", image:'', text: 'Полный текст новости 6'});
	news.push({name: 'Новость 7', description:'Описание новости 7', dateCreate: "07-02-2017", image:'', text: 'Полный текст новости 7'});
	news.push({name: 'Новость 8', description:'Описание новости 8', dateCreate: "08-02-2017", image:'', text: 'Полный текст новости 8'});
	news.push({name: 'Новость 9', description: 'Описание новости 9', dateCreate: "09-02-2017", image:'', text: 'Полный текст новости 9'});
	news.push({name: 'Новость 10', description:'Описание новости 10', dateCreate: "10-02-2017", image:'', text: 'Полный текст новости 10'});
	news.push({name: 'Новость 11', description:'Описание новости 11', dateCreate: "11-02-2017", image:'', text: 'Полный текст новости 11'});
	news.push({name: 'Новость 12', description: 'Описание новости 12', dateCreate: "12-02-2017", image:'', text: 'Полный текст новости 12'});

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

//function to get news listings with sort, skip and limit
newsModel.get = function(skip, limit){
	var results = q.defer();

	skip = parseInt(skip) || 0;
	limit = parseInt(limit) || 10;

	News.find(function(err, dbNews) {
		if (err){
			results.reject(err);
		}
		results.resolve(dbNews);

	}).sort({ 'dateCreate': -1 }).skip(skip).limit(limit);
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