var catsModel = [
	{
		'name': 'Fatty',
		'clickCount': 0,
		'src': 'pics/fatty.jpg',
		'level': '',
		'nickNames':''
	},{
		'name': 'Human',
		'clickCount': 0,
		'src': 'pics/human.jpg',
		'level': '',
		'nickNames':''
	},{
		'name': 'Killer',
		'clickCount': 0,
		'src': 'pics/killer.jpg',
		'level': '',
		'nickNames':''
	},{
		'name': 'Scaredy',
		'clickCount': 0,
		'src': 'pics/scaredy.jpg',
		'level': '',
		'nickNames':''
	},{
		'name': 'Stupid',
		'clickCount': 0,
		'src': 'pics/stupid.jpg',
		'level': '',
		'nickNames':''
}];

var cat = function(data){
	// for(var i = 0; i<catsModel.length; i++){
	this.name = ko.observable(data.name);
	this.clickCount = ko.observable(data.clickCount);
	this.src = ko.observable(data.src);
	// this.level = ko.computed(function(){
	// 	// var level;
	// 	// var clicks = this.currentCat().clickCount();
	// 	// if(clicks<10){
	// 	// 	level = 'kitten';
	// 	// }else if(clciks <20){
	// 	// 	level = 'teen';
	// 	// }else {
	// 	// 	level = 'ninja';
	// 	// }
	// });
	// }
	
}


var ViewModel = function(){
	var that = this;

	this.catList =ko.observableArray([]);


	catsModel.forEach(function(catItem){
		that.catList.push(new cat(catItem));
	});

	this.changeCat = function(a){
		console.log("fuck");
		that.currentCat(a);
	};

	this.currentCat= ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1)
	};

}

ko.applyBindings(new ViewModel());