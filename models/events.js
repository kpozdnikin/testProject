var mongoose = require('mongoose');
var q = require('q');

//defining schema for events table
var eventsSchema = new mongoose.Schema({
	  name: String,
	  description: String,
	  text: String
});

var Event = mongoose.model('events', eventsSchema);

//Initlizing interface object of this model.
var eventsModel = {};

//Function to seed events data.
eventsModel.seed = function(){
	var events = Array();
	events.push({name: 'Getting Started With ReactJs', description:'React.js is a JavaScript library for building user interfaces. - Just the UI: Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, its easy to try it out on a small feature in an existing project. - Virtual DOM: React uses a virtual DOM diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required. - Data flow: React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.'});
	events.push({name: 'Google Cardboard Assembly', description:'Google Cardboard Assembly Step by Step Instructions [HD]'});
	events.push({name: 'How Does AngularJS Work Beginners Angular Tutorial', description: 'What you will learn in this course. How to use Angular.js to save time, create better projects and give your users a better experience. We’ll create a full SPA from scratch (client side). How to cloud-enable your SPA so that you can connect it to any kind of backend. Fully commented source code of the course project. Learn how to architecture a SPA: modules, controllers, services Learn how to add URL routes to your client-side SPA. We’ll be using Angular.js version 1.3.2. Access live examples at the end of each coding lesson. Learn how to use other great tools such as Boostrap 3, UnderscoreJS and Google Chrome’s Developer Tools!'});
	events.push({name: 'How does Node.js work', description:'New to Node.js? Check out this video that explains "How does Node work?"'});
	events.push({name: 'iPhone 7 Trailer 2016', description:'iPhone 7 concept trailer 2016! with Bluetooth AirPods by Beats and ChargingPad, and much more!'});
	events.push({name: 'What is the MEAN Stack', description:'Do you know what the MEAN stack is? Watch our short intro video and get ready to kick your learning into shape with this full-stack development toolkit. Then head on over and play through our MEAN-related courses now.'});

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

//function to get events listings
eventsModel.get = function(skip, limit){
	var results = q.defer();

	skip = parseInt(skip) || 0;
	limit = parseInt(limit) || 10;

	Event.find(function(err, dbEvents) {
		if (err){
			results.reject(err);
		}
		results.resolve(dbEvents);

	}).skip(skip).limit(limit);
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