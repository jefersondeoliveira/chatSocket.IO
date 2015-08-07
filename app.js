var express = require('express')
  , load = require('express-load')
  , bodyParser = require('body-parser')
  , path  = require( "path" )
  , app = express()
  , server = require('http').Server(app)
  , io = require('socket.io')(server);

app.set('port', (process.env.PORT || 3000));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use( "/public", express.static( path.join( __dirname, "public" ) ) );

load('models')
  .then('controllers')
  .then('routes')
  .into(app);
  
load('sockets')
        .into( io );

server.listen(app.get('port'), function () {
  console.log("Rodando na porta "+app.get('port'));
});
