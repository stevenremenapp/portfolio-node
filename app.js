let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/projects', function(req, res) {
    res.render('projects');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.listen(3000, function() {
    console.log('running running');
});