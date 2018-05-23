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

app.get('/api/:time', function(req, res){
    res.send(getUnixAndDate(req.params.time));
});


// FUNCTIONS ------------------------------------------------------------------
function getUnixAndDate(date) {
    var date    = (Number(date)) ? Number(date) : date; 
    var dateObj = new Date(date);
    var options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    
    if(dateObj === null) {
        return 'Invalid date';
    } else {
        return {
            "unix": dateObj.getTime(), 
            "natural": dateObj.toLocaleDateString('en-EN', options)
        }
    }
}

// LISTENING ------------------------------------------------------------------
app.listen(process.env.PORT, function() {
    console.log('Serving on port ' + process.env.PORT);
});