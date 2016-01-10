var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('bower_components'));
app.use(bodyParser());


var toDoItems = [
  		{id: 1, firstName: "shiva", lastName: "Durgam"},
  		{id: 2, firstName: "krishna", lastName: "Reddy"},
  		{id: 3, firstName: "durgam", lastName: "Chetty"}
  	];

app.get('/big.*/', function (request, response, next){
	console.log('I got it');
	next();
});

app.get('/', function (request, response) {
  response.render('index', {
  	title: 'My app',
  	items: toDoItems
  });
});

app.post('/add', function(request,response) {
	var newItemFName = request.body.newItemFirstName;
	var newItemLName =  request.body.newItemLastName;
	toDoItems.push({
		id: toDoItems.length+1,
		firstName: newItemFName,
		lastName: newItemLName
	});

	response.redirect('/');

});

app.listen(3000, function(){
	console.log(Date());
})





//app.get('/:anything', function (request, response) {
//	var anything = request.params.anything
  //  response.send(anything);
//});