// app.js

// IMPORTS --------------------------------------------------------------------
var express = require('express');
var app = express();


// CONFIG ---------------------------------------------------------------------
app.set('view engine', 'ejs');
app.use(express.static(process.cwd() + '/public'));


// ROUTES ---------------------------------------------------------------------
app.get('/', function(req, res) {
    res.render('index');
});


// LISTENING ------------------------------------------------------------------
app.listen(process.env.PORT, function() {
    console.log('Serving on port ' + process.env.PORT);
});