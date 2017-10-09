var catsModel = ko.observableArray([
	{
		'name': 'Fatty',
		'clickCount': 0,
		'src': 'pics/fatty.jpg',
		'level': '',
		'nickNames':''
	},{
		'name': 'Human',
		'clickCount': 0,
		'src': 'pics/human.png',
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
}]);

var cat = function(){
	for(var i = 0; i<catsModel.length; i++){
	this.name = ko.observable(this.catsModel.name[i]);
	this.clickCount = ko.observable(this.catsModel.clickCount[i]);
	this.src = ko.observable(this.catsModel.src[i]);
	}
	
}


var ViewModel = function(){
	this.currentCat= ko.observable(new cat());
	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1)
	};

}

ko.applyBindings(new ViewModel());



