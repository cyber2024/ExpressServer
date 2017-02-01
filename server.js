var express = require('express');
var morgan = require('morgan');

var app = express();
var router = require(process.cwd() + '/routes/router.js');

var path = process.cwd();

router(app);

app.use('/', express.static(path + '/public'));

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function(){
  console.log('Listening on port ', app.get('port'));
})
