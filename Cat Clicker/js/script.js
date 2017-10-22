var body = $('body');

var names = [
	{
		'name': "Nibbles",
		'count': 0,
		'img': "cat.gif"
	}, {
		'name': "SirCatsAlot",
		'count': 0,
		'img': "cat(1).jpg"
	}, {
		'name': "Killer",
		'count': 0,
		'img': "cat(2).jpg"
	}, {
		'name': "Human",
		'count': 0,
		'img': "cat(3).jpg"
	}, {
		'name': "Fatty",
		'count':0,
		'img': "cat(4).jpg"
	}];

body.prepend('<div id="cats"></div>');

var cats = $('#cats');

for(var i = 0; i < names.length; i++) {
	var name = names[i].name;
	cats.append('<div class='+name+'></div>');
	$('.'+name).append('<button id="'+name+'">'+name+'</div>');
	// console.log(name)
	var cat = names[i].img;
	$('#'+name).append('<div class="col-lg-3 "></div>');
	$('#'+name).append('<img id="'+cat+'"class="col-lg-6" src="'+cat+'" style="display:none">');	
};



var click = function(){
	for(var i = 0; i < names.length; i++){
		var name = $('#'+names[i].name);
		var kats = [];
		var farts = [];
		name.data('count', 0);
		name.click(function() {
			var that = $(this).children();
			var things = $(this);
			var thing = this;
			that.show();
			kats.push(thing);
			farts.push(that);
			if(kats.length > 1){
				if(kats[0] != kats[1]){
					farts[0].hide();
					kats.splice(0,1);
					farts.splice(0,1);
				}else if(kats[0] === kats[1]){
					kats.splice(0,1);
					farts.splice(0,1);
				    count = things.data('count')+1;
				    things.data('count', count)
					that.text(things.data('count'))		
				};
			} 
		});

	}
};

click();




