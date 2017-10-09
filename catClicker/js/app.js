

var ViewModel = function(){
	var that = this

	this.catsModel = ko.observableArray([
	{
		'name': 'Fatty',
		'clickCount': 0,
		'src': 'pics/fatty.jpg',
		'level': 1,
		'nickNames':''
	},{
		'name': 'Human',
		'clickCount': 0,
		'src': 'pics/human.png',
		'level': 1,
		'nickNames':''
	},{
		'name': 'Killer',
		'clickCount': 0,
		'src': 'pics/killer.jpg',
		'level': 1,
		'nickNames':''
	},{
		'name': 'Scaredy',
		'clickCount': 0,
		'src': 'pics/scaredy.jpg',
		'level': 1,
		'nickNames':''
	},{
		'name': 'Stupid',
		'clickCount': 0,
		'src': 'pics/stupid.jpg',
		'level': 1,
		'nickNames':''
}]);


	this.name = ko.observable(this.name);
	this.clickCount = ko.observable(0);
	this.src = ko.observable('pics/fatty.jpg');
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1)
	};
}

ko.applyBindings(new ViewModel());



