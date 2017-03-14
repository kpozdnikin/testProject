var mongoose = require('mongoose');
var q = require('q');

//defining schema for events table
var eventsSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	dateStart: { type: Date, default: Date.now },
	dateEnd: { type: Date, default: Date.now },
    text: String
});

var Event = mongoose.model('events', eventsSchema);

//Initlizing interface object of this model.
var eventsModel = {};

//Function to seed events data.
eventsModel.seed = function(){
	var events = Array();
	events.push({name: 'Мероприятие 1', description:'Описание мероприятия 1', dateStart: "01-02-2017", dateEnd: "03-02-2017", image:'', text: 'Полный текст мероприятия 1'});
	events.push({name: 'Мероприятие 2', description:'Описание мероприятия 2', dateStart: "02-02-2017", dateEnd: "04-02-2017", image:'', text: 'Полный текст мероприятия 2'});
	events.push({name: 'Мероприятие 3', description: 'Описание мероприятия 3', dateStart: "03-02-2017", dateEnd: "05-02-2017", image:'', text: 'Полный текст мероприятия 3'});
	events.push({name: 'Мероприятие 4', description:'Описание мероприятия 4', dateStart: "04-02-2017", dateEnd: "06-02-2017", image:'', text: 'Полный текст мероприятия 4'});
	events.push({name: 'Мероприятие 5', description:'Описание мероприятия 5', dateStart: "05-02-2017", dateEnd: "07-02-2017", image:'', text: 'Полный текст мероприятия 5'});
	events.push({name: 'Мероприятие 6', description: 'Описание мероприятия 6', dateStart: "06-02-2017", dateEnd: "08-02-2017", image:'', text: 'Полный текст мероприятия 6'});
	events.push({name: 'Мероприятие 7', description:'Описание мероприятия 7', dateStart: "07-02-2017", dateEnd: "09-02-2017", image:'', text: 'Полный текст мероприятия 7'});
	events.push({name: 'Мероприятие 8', description:'Описание мероприятия 8', dateStart: "08-02-2017", dateEnd: "10-02-2017", image:'', text: 'Полный текст мероприятия 8'});
	events.push({name: 'Мероприятие 9', description: 'Описание мероприятия 9', dateStart: "09-02-2017", dateEnd: "11-02-2017", image:'', text: 'Полный текст мероприятия 9'});
	events.push({name: 'Мероприятие 10', description:'Описание мероприятия 10', dateStart: "10-02-2017", dateEnd: "12-02-2017", image:'', text: 'Полный текст мероприятия 10'});
	events.push({name: 'Мероприятие 11', description:'Описание мероприятия 11', dateStart: "11-02-2017", dateEnd: "13-02-2017", image:'', text: 'Полный текст мероприятия 11'});
	events.push({name: 'Мероприятие 12', description: 'Описание мероприятия 12', dateStart: "12-02-2017", dateEnd: "14-02-2017", image:'', text: 'Полный текст мероприятия 12'});

	var dataToInsert = Array();
	for(var i = 0; i < 100; i++){
		var index = i%6;
		var eventObject = JSON.parse(JSON.stringify(events[index])); //cloning object
		eventObject.name = '[' + i + '] ' + eventObject.name;
		dataToInsert.push(eventObject);
	}

	Event.collection.insert(dataToInsert, function(err, dbEvents) {
		if(err){
			console.log('error occured in populating events database');
			console.log(err);	
		} 
		else{
			console.log('Events table populated.');
		}	
	});
	
}

//function to get events listings with sort, skip and limit
eventsModel.get = function(skip, limit){
	var results = q.defer();

	skip = parseInt(skip) || 0;
	limit = parseInt(limit) || 10;

	Event.find(function(err, dbEvents) {
		if (err){
			results.reject(err);
		}
		results.resolve(dbEvents);

	}).sort({ 'dateStart': -1 }).skip(skip).limit(limit);
	return results.promise;
};

//function to get single event by its id.
eventsModel.getOne = function(id){
	var results = q.defer();
	if(!id){
		results.reject({status:'error', error:'Event Id not supplied.'});
	}
	Event.findOne({_id:id},function(err, dbEvent) {
		if (err){
			results.reject(err);
		}
		if(dbEvent){
			results.resolve(dbEvent);
		} else{
			results.reject({status:'error', error:'Invalid event Id supplied.'});
		}
	});
	return results.promise;
};

module.exports = eventsModel;