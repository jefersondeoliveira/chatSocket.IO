var express = require('express')
  , load = require('express-load')
  , bodyParser = require('body-parser')
  , path  = require( "path" )
  , app = express()
  , server = require('http').Server(app)
  , io = require('socket.io')(server, {log:false, origins:'*:*'});


io.configure(function(){
	io.set("transports", ["xhr-polling"]);
	io.set("polling duration", 10);
});  

app.set('port', (process.env.PORT || 3000));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use( "/public", express.static( path.join( __dirname, "public" ) ) );

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
    });

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

load('sockets')
        .into( io );

server.listen(app.get('port'), function () {
  console.log("Rodando na porta "+app.get('port'));
});
