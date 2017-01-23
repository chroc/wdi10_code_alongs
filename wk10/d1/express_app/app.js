var app = require('express')();
const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  console.log(request);
  response.send('Hello World!');
});

app.get('/about', function(request, response) {
  response.render('about', {message: 'welcome to the about page'});
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}`);
});

